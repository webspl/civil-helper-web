import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function AluminiumCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Aluminium Work Cost (BDT):</div>
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
                {/*----- list row 40% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Outer Framing Window Sliding Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.40) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 30% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Glass Shutter Window Sliding Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.30) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Verandah Sliding Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 5% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Toilet High Window Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.05) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 5% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Common Area Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.05) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
