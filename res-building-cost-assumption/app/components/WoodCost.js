import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function WoodCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Wood Work Cost (BDT):</div>
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
                            Door Frame Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.4) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 15% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Main Door Shutter Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.15) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 35% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Partex Door Shutter Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.35) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 10% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Cat Door and Accessories Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.10) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
