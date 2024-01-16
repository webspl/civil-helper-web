import { Fragment } from "react";
import {numberFormat} from './../utils/numberFormat';

export default function OtherCivilCost({ cost }) {
    return (
        <Fragment>
            <div className="border-bottom fw-bold">Other Civil Work Cost (BDT):</div>
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
                {/*----- list row 30% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Boundary Wall Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.30) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 15% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Line Terracing/Roof Top Paver Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.15) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 4% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Logo, Gardening and Other Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.04) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 10% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            GF pavement and Footpath Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.10) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 20% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Lintel, F/Slab, Drop-Wall, Counter Slab Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.20) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 1% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Cable Tray Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.01) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 4% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Sanitery Duct Cover Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.04) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
                {/*----- list row 2% -----*/}
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4">
                            Receiption Desk and Letter Box Cost:
                        </div>
                        <div className="col-md-4">
                            <span className="text-primary">
                                {numberFormat(cost * 0.02) || '***'}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
