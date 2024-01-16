import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function UtilityConnectionBillCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Utility Connection and Bill Cost (BDT):</div>
            <ul className="list-group mt-1">
                {/*----- list row -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Total Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 35% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Desa/Desco Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.35) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Titas Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 15% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Wasa Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.15) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 30% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Utility Bill Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.30) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
