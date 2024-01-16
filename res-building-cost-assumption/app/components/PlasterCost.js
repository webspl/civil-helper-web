import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function PlasterCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Plaster Work Cost (BDT):</div>
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
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Ceiling Plaster Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 50% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Internal Wall Plaster Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.50) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 30% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Outside Plaster Cost:
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
