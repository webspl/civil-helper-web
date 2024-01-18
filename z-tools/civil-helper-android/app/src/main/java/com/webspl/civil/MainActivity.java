package com.webspl.civil;

import android.annotation.SuppressLint;
import android.net.http.SslError;
import android.os.Bundle;
import android.view.View;
import android.webkit.CookieManager;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;
import android.widget.ProgressBar;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

public class MainActivity extends AppCompatActivity {

    //-------------------- Global Vars --------------------
    LinearLayout loadingLayout, mainLayout;
    SwipeRefreshLayout mainLayoutRefreshable;
    ProgressBar progressBar;
    WebView webView;
    long back_pressed;
    String app_name = "Civil Helper";
    String url = "https://civil.webspl.com";
    //-------------------- Global Vars --------------------


    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //-------------------- CORE CODE START --------------------
        loadingLayout = findViewById(R.id.loading_layout);
        mainLayout = findViewById(R.id.main_layout);
        mainLayoutRefreshable = findViewById(R.id.main_layout_refreshable);
        progressBar = findViewById(R.id.loadingProgressBar);
        webView = findViewById(R.id.web_view);

        // Setup WebView.
        webView.getSettings().setSupportZoom(true);
        webView.getSettings().setBuiltInZoomControls(false);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setUserAgentString(System.getProperty("http.agent") + app_name);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setDatabaseEnabled(true);
        webView.getSettings().setCacheMode(WebSettings.LOAD_DEFAULT);
        webView.getSettings().setSaveFormData(true);
        webView.getSettings().setSavePassword(true);
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true);
        CookieManager.getInstance().setAcceptCookie(true);
        CookieManager.getInstance().acceptCookie();
        CookieManager.getInstance().getCookie(url);
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {

            // On Loading Finish, Hide Loading Indicator.
            public void onPageFinished(WebView view, String url) {
                mainLayout.setVisibility(View.VISIBLE);
                loadingLayout.setVisibility(View.GONE);
                if (mainLayoutRefreshable.isRefreshing())
                    mainLayoutRefreshable.setRefreshing(false);
            }

            // Fail to Load Show Error.
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                view.loadData("Check internet connection and try again.",
                        "text/html; charset=utf-8", "UTF-8");
                alertAndExit("Error loading page. Want to exit?");
            }

        });
        webView.loadUrl(url);

        // Setup Swipe Down and Refresh with Clear Cache.
        mainLayoutRefreshable.setOnRefreshListener(() -> {
            mainLayoutRefreshable.setRefreshing(true);
            webView.reload();
            webView.clearCache(true);
        });
        //-------------------- CORE CODE END --------------------

    }


    //-------------------- Custom Methods --------------------
    //On Back Button Pressed.
    @Override
    public void onBackPressed() {
        if (back_pressed + 1000 > System.currentTimeMillis()) {
            super.onBackPressed();
        } else if (webView.canGoBack()) {
            webView.goBack();
        } else {
            alertAndExit("Are you sure you want to close?");
        }
        back_pressed = System.currentTimeMillis();
    }
    //-------------------- Custom Methods --------------------


    //-------------------- Defined Methods --------------------
    // alert and exit app.
    public void alertAndExit(String message) {
        new AlertDialog.Builder(this)
                .setMessage(message)
                .setPositiveButton("Yes", (dialog, which) -> finish())
                .setNegativeButton("No", null)
                .show();
    }
    //-------------------- Defined Methods --------------------
}
