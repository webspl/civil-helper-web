import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function ToiletAndkitchenTilesCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Toilet and Kitchen Tiles Work Cost (BDT):</div>
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
                {/*----- list row 60% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Bath Wall Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.60) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Kitchen Wall Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 9% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Bath Floor Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.09) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 4% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Bath Counter Top Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.04) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 3% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Kitchen Floor Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.03) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 4% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Kitchen Counter Top Cost:
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
