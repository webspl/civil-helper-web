import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function BrickCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Brick Work Cost (BDT):</div>
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
                {/*----- list row 6% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            GF Brick Work:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.06) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row (floor * 18%) -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Typical Floor Work:
                        </div>
                        <div className="col-md-4">
                            Need to dev
                            <span className="text-primary d-none">
                                {numberFormat(cost * 0.06) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 4% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Roof Top Brick Work:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.04) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
