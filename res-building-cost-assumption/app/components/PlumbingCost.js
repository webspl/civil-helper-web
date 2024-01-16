import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function PlumbingCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Plumbing and Sanitery Work Cost (BDT):</div>
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
                {/*----- list row 25% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            UPVC Vertical Line Through Duct Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.25) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 30% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            GI Line Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.30) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 40% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Fixture and Fittings Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.40) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 5% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Ground Floor Work Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.5) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
