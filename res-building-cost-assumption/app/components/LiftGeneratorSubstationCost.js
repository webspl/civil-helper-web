import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function LiftGeneratorSubstationCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Lift Generator Substation Cost (BDT):</div>
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
                {/*----- list row 50% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Lift Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.50) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 25% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Generator Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.25) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Substation Cost:
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
                            PABX, Fire Cost:
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
