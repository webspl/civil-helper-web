import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function ElectricCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Electric Work Cost (BDT):</div>
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
                {/*----- list row 10% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Conduiting Inside Slab Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.10) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 15% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Conduiting on Wall + MK Box Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.15) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 55% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Cabling Work Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.55) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Switch Soket Work Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
