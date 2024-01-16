import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function MetalCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Metal Work Cost (BDT):</div>
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
                            Window Grill Cost:
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
                            Verandah Railling Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 10% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Stair Railling Cost:
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
                            Main Gate, Generator+Substation and Safety Grill Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.15) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
