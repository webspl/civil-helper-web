import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function PaintCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Paint Work Cost (BDT):</div>
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
                            Upto Putty Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.40) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Internal Wall+Ceiling 1st Coat Cost:
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
                            Internal Wall+Ceiling 2nd Coat Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.15) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 25% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Outside paint/ceramic tiles Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.25) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
