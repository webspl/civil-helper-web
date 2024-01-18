'use client';
import Image from 'next/image';
import Swal from 'sweetalert2';
import React, { useState, useEffect, Fragment } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(100);
	const [resultGenerated, setResultGenerated] = useState(false);

	const [totalVolume, setTotalVolume] = useState(100);

	const [ratioCement, setRatioCement] = useState(1);
	const [ratioSand, setRatioSand] = useState(1.5);
	const [ratioStone, setRatioStone] = useState(3);

	const [rateCement, setRateCement] = useState(540);
	const [rateSand, setRateSand] = useState(60);
	const [rateStone, setRateStone] = useState(150);

	const [resultCement, setResultCement] = useState('-');
	const [resultSand, setResultSand] = useState('-');
	const [resultStone, setResultStone] = useState('-');

	const [resultCementAmount, setResultCementAmount] = useState('-');
	const [resultSandAmount, setResultSandAmount] = useState('-');
	const [resultStoneAmount, setResultStoneAmount] = useState('-');
	const [resultTotalAmount, setResultTotalAmount] = useState('-');
	const [resultUnitAmount, setResultUnitAmount] = useState('-');

	// set resultGenerated
	useEffect(() => {
		setResultGenerated(false);
		setLoading(100);
	}, [totalVolume]);

	const calculateConcrete = () => {
		const dry_volume = totalVolume * 1.54;
		const ratio_sum = ratioCement + ratioSand + ratioStone;
		const ratio_x = ratioCement / ratio_sum;
		const ratio_y = ratioSand / ratio_sum;
		const ratio_z = ratioStone / ratio_sum;

		const total_cement = dry_volume * ratio_x * 0.8;
		const total_cement_amount = total_cement * rateCement;
		setResultCement(total_cement.toFixed(2));
		setResultCementAmount(total_cement_amount.toFixed(2).toLocaleString());
		const total_sand = dry_volume * ratio_y;
		const total_sand_amount = total_sand * rateSand;
		setResultSand(total_sand.toFixed(2));
		setResultSandAmount(total_sand_amount.toFixed(2).toLocaleString());
		const total_stone = dry_volume * ratio_y;
		const total_stone_amount = total_stone * rateStone;
		setResultStone(total_stone.toFixed(2));
		setResultStoneAmount(total_stone_amount.toFixed(2).toLocaleString());

		const total_cost = total_cement_amount + total_sand_amount + total_stone_amount;
		const unit_cost = total_cost / totalVolume;
		setResultTotalAmount(total_cost.toFixed(2).toLocaleString());
		setResultUnitAmount(unit_cost.toFixed(2).toLocaleString());

		// set result generated true
		setLoading(() => 70);
		setTimeout(() => {
			setLoading(() => 100);
			setResultGenerated(true);
		}, 500);
	};

	return (
		<Fragment>
			<nav className="navbar bg-dark-subtle border-bottom border-secondary">
				<div className="container">
					<div className="navbar-brand">Concrete Voule Estimator</div>
					<a className="btn btn-light" href="https://civil.webspl.com">
						HOME
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="row border bg-light my-lg-3 py-3">
					{/*----- data form start -----*/}
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12 pb-3">
								<label htmlFor="total_volume" className="form-label">
									Total Concrete Volume (CFT)
								</label>
								<input
									type="number"
									className="form-control"
									id="total_volume"
									value={totalVolume}
									onChange={(e) => setTotalVolume(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-12 pb-3">
								<div className="row">
									<div className="col-md-4 pb-3">
										<label htmlFor="ratio_cement" className="form-label">
											Cement Ratio
										</label>
										<input
											type="number"
											className="form-control"
											id="ratio_cement"
											value={ratioCement}
											onChange={(e) => setRatioCement(parseFloat(e.target.value))}
											required
										/>
									</div>
									<div className="col-md-4 pb-3">
										<label htmlFor="ratio_sand" className="form-label">
											Sand Ratio
										</label>
										<input
											type="number"
											className="form-control"
											id="ratio_sand"
											value={ratioSand}
											onChange={(e) => setRatioSand(parseFloat(e.target.value))}
											required
										/>
									</div>
									<div className="col-md-4 pb-3">
										<label htmlFor="ratio_stone" className="form-label">
											Stone Ratio
										</label>
										<input
											type="number"
											className="form-control"
											id="ratio_stone"
											value={ratioStone}
											onChange={(e) => setRatioStone(parseFloat(e.target.value))}
											required
										/>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<button type="button" className="btn btn-secondary w-100" onClick={calculateConcrete}>
									Calculate
								</button>
							</div>
							<div className={`col-md-6 mt-2 mt-lg-0 ${loading === 100 && 'd-none'}`}>
								<div className="progress" role="progressbar" style={{ height: '38px' }}>
									<div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: loading + '%' }}></div>
								</div>
							</div>
						</div>
					</div>
					{/*----- data form end -----*/}

					{/*----- rate form start -----*/}
					<div className="col-md-6 mt-5 mt-lg-0">
						<div className="row">
							<div className="col-md-12 pb-3">
								<label htmlFor="rate_cement" className="form-label">
									Rate Cement (Bag)
								</label>
								<input
									type="number"
									className="form-control"
									id="rate_cement"
									value={rateCement}
									onChange={(e) => setRateCement(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className="col-md-12 pb-3">
								<div className="row">
									<div className="col-md-6 pb-3">
										<label htmlFor="rate_sand" className="form-label">
											Rate Sand (CFT)
										</label>
										<input
											type="number"
											className="form-control"
											id="rate_sand"
											value={rateSand}
											onChange={(e) => setRateSand(parseFloat(e.target.value))}
											required
										/>
									</div>
									<div className="col-md-6 pb-3">
										<label htmlFor="rate_stone" className="form-label">
											Rate Stone (CFT)
										</label>
										<input
											type="number"
											className="form-control"
											id="rate_stone"
											value={rateStone}
											onChange={(e) => setRateStone(parseFloat(e.target.value))}
											required
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*----- rate form end -----*/}
				</div>
			</div>

			<div className={`container mb-5 ${!resultGenerated && 'd-none'}`}>
				<div className="row border bg-light my-3 py-3">
					{/*----- material details start -----*/}
					<div className="col-md-6">
						<div className="list-group">
							<div className="list-group-item list-group-item-action text-white bg-secondary">Material Details</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Cement (Bags)</div>
									<div className="col-9 text-center text-primary">{resultCement}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Sand (CFT)</div>
									<div className="col-9 text-center text-primary">{resultSand}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Stone (CFT)</div>
									<div className="col-9 text-center text-primary">{resultStone}</div>
								</div>
							</div>
						</div>
					</div>
					{/*----- material details end -----*/}

					{/*----- costing details start -----*/}
					<div className="col-md-6">
						<div className="list-group">
							<div className="list-group-item list-group-item-action text-white bg-secondary">Material Details</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Cement (TK)</div>
									<div className="col-9 text-center text-primary">{resultCementAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Sand (TK)</div>
									<div className="col-9 text-center text-primary">{resultSandAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Stone (TK)</div>
									<div className="col-9 text-center text-primary">{resultStoneAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Total Cost (TK)</div>
									<div className="col-9 text-center text-primary">{resultTotalAmount}</div>
								</div>
							</div>
							<div className="list-group-item list-group-item-action">
								<div className="row">
									<div className="col-3">Per Unit Cost (TK)</div>
									<div className="col-9 text-center text-primary">{resultUnitAmount}</div>
								</div>
							</div>
						</div>
					</div>
					{/*----- costing details end -----*/}
				</div>
			</div>
		</Fragment>
	);
}
