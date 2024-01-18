'use client';
import Image from 'next/image';
import Swal from 'sweetalert2';
import React, { useState, useEffect, Fragment} from 'react';

export default function Home() {
	const [loading, setLoading] = useState(100);
	const [resultGenerated, setResultGenerated] = useState(false);
	const [exposure, setExposure] = useState('');
	const [slump_range, setSlump_range] = useState('');
	const [f_prime_c, setF_prime_c] = useState('');
	const [water_cement_ratio, setWater_cement_ratio] = useState('');

	const [f_prime_cr, setF_prime_cr] = useState('');
	const [wc_for_strength, setWc_for_strength] = useState('');
	const [max_wc_for_exposure, setMax_wc_for_exposure] = useState('');
	const [governing_wc, setGoverning_wc] = useState('');
	const [max_size_coarse_agg, setMax_size_coarse_agg] = useState(20);
	const [specific_gravity_cement, setSpecific_gravity_cement] = useState(3.15);
	const [specific_gravity_coarse_agg, setSpecific_gravity_coarse_agg] = useState(2.66);
	const [specific_gravity_fine_agg, setSpecific_gravity_fine_agg] = useState(2.54);
	const [entrapped_air, setEntrapped_air] = useState(2);

	const [mass_of_water, setMass_of_water] = useState(0);
	const [mass_of_water_tm2, setMass_of_water_tm2] = useState(0);	// self inputed.
	const [mass_of_water_tm3, setMass_of_water_tm3] = useState(0);	// self inputed.

	const [mass_of_cement, setMass_of_cement] = useState(0);
	const [mass_of_cement_tm2, setMass_of_cement_tm2] = useState(0);
	const [mass_of_cement_tm3, setMass_of_cement_tm3] = useState(0);

	const [mass_of_coarse_agg, setMass_of_coarse_agg] = useState(0);
	const [mass_of_coarse_agg_tm2, setMass_of_coarse_agg_tm2] = useState(0);
	const [mass_of_coarse_agg_tm3, setMass_of_coarse_agg_tm3] = useState(0);

	const [mass_of_fine_agg, setMass_of_fine_agg] = useState(0);
	const [mass_of_fine_agg_tm2, setMass_of_fine_agg_tm2] = useState(0);
	const [mass_of_fine_agg_tm3, setMass_of_fine_agg_tm3] = useState(0);


	// set resultGenerated
	useEffect(() => {
		setResultGenerated(false);
		setLoading(100);
	}, [exposure, slump_range, f_prime_c, water_cement_ratio]);

	// setting governing_wc
	useEffect(() => {
		setGoverning_wc(Math.min(wc_for_strength, max_wc_for_exposure));
	}, [wc_for_strength, max_wc_for_exposure]);

	// setting mass_of_cement
	useEffect(() => {
		if(mass_of_water && water_cement_ratio)
			setMass_of_cement((mass_of_water / water_cement_ratio).toFixed(2));
	}, [mass_of_water, water_cement_ratio]);
	// setting mass_of_cement_tm2
	useEffect(() => {
		if(mass_of_water_tm2 && water_cement_ratio)
			setMass_of_cement_tm2((mass_of_water_tm2 / water_cement_ratio).toFixed(2));
	}, [mass_of_water_tm2, water_cement_ratio]);
	// setting mass_of_cement_tm3
	useEffect(() => {
		if(mass_of_water_tm3 && water_cement_ratio)
			setMass_of_cement_tm3((mass_of_water_tm3 / water_cement_ratio).toFixed(2));
	}, [mass_of_water_tm3, water_cement_ratio]);
	// setting mass_of_water_tm2, mass_of_water_tm2
	useEffect(() => {
		setMass_of_water_tm2(mass_of_water);
		setMass_of_water_tm3(mass_of_water);
	}, [mass_of_water]);


	// handle f_prime_cr change ----------
	const handleFprimeC = (e) => {
		const f_prime_c_val = parseFloat(e.target.value);
		setF_prime_c(f_prime_c_val);

		// calculating f_prime_cr
		let current_f_prime_cr = 0;
		if(f_prime_c_val > 5000){
			current_f_prime_cr = parseInt((f_prime_c_val*1.1)+700);
			setF_prime_cr(current_f_prime_cr);
		}
		if(f_prime_c_val <= 5000 && f_prime_c_val >= 3000){
			current_f_prime_cr = parseInt(f_prime_c_val+1200);
			setF_prime_cr(current_f_prime_cr);
		};
		if(f_prime_c_val < 3000){
			current_f_prime_cr = parseInt(f_prime_c_val+1000);
			setF_prime_cr(current_f_prime_cr);
		}

		// calculating wc_for_strength
		setWc_for_strength(((1.1734 * Math.pow(2.713, -(0.0259 * current_f_prime_cr * 0.007)))).toFixed(2));
	}

	// handle exposure change ----------
	const handleExposure = (e) => {
		const exposure_val = e.target.value;
		setExposure(exposure_val);
		
		// setting max_wc_for_exposure
		if(exposure_val === 'Mild') setMax_wc_for_exposure(0.55);
		if(exposure_val === 'Moderate') setMax_wc_for_exposure(0.5);
		if(exposure_val === 'Severe') setMax_wc_for_exposure(0.45);
		if(exposure_val === 'Very Severe') setMax_wc_for_exposure(0.45);
		if(exposure_val === 'Extream Severe') setMax_wc_for_exposure(0.4);
	}

	// handle slump_range change ----------
	const handleSlumpRange = (e) => {
		const slump_range_val = e.target.value;
		setSlump_range(slump_range_val);
		
		// setting max_wc_for_exposure
		if(slump_range_val === '25-50') setMass_of_water(190);
		if(slump_range_val === '75-100') setMass_of_water(205);
		if(slump_range_val === '150-175') setMass_of_water(216);
	}

	// validate water cement ratio
	const validateWaterCementRatio = () => {
		if(water_cement_ratio > governing_wc)
			return Swal.fire('Inputed w/c cannot be greater than the governing w/c.');
	}

	// ---------- Calculation Start ----------
	const calculate = () => {
		const volume_water = (mass_of_water / 1) / 1000;
		const volume_cement = (mass_of_cement/ specific_gravity_cement) / 1000;
		const total_volume = 1 - (volume_water + volume_cement);
		setMass_of_coarse_agg(parseInt(total_volume * 0.6 * specific_gravity_coarse_agg * 1000));
		setMass_of_fine_agg(parseInt(total_volume * 0.4 * specific_gravity_fine_agg * 1000));

		// for tm2
		const volume_water_tm2 = (mass_of_water_tm2 / 1) / 1000;
		const volume_cement_tm2 = (mass_of_cement_tm2/ specific_gravity_cement) / 1000;
		const total_volume_tm2 = 1 - (volume_water_tm2 + volume_cement_tm2);
		setMass_of_coarse_agg_tm2(parseInt(total_volume_tm2 * 0.6 * specific_gravity_coarse_agg * 1000));
		setMass_of_fine_agg_tm2(parseInt(total_volume_tm2 * 0.4 * specific_gravity_fine_agg * 1000));

		// for tm3
		const volume_water_tm3 = (mass_of_water_tm3 / 1) / 1000;
		const volume_cement_tm3 = (mass_of_cement_tm3/ specific_gravity_cement) / 1000;
		const total_volume_tm3 = 1 - (volume_water_tm3 + volume_cement_tm3);
		setMass_of_coarse_agg_tm3(parseInt(total_volume_tm3 * 0.6 * specific_gravity_coarse_agg * 1000));
		setMass_of_fine_agg_tm3(parseInt(total_volume_tm3 * 0.4 * specific_gravity_fine_agg * 1000));

		// set result generated true
		setLoading(() => 70);
		setTimeout(() => {
			setLoading(() => 100);
			setResultGenerated(true);
		}, 500);
	}
	// ---------- Calculation End ----------


	return (
		<Fragment>
			<nav className="navbar bg-dark-subtle border-bottom border-secondary">
				<div className="container">
					<div className="navbar-brand">Concrete Mix Design</div>
					<a className="btn btn-light" href="https://civil.webspl.com">
						HOME
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="row border bg-light my-lg-3 py-3">
					<div className="col-md-7">
						{/*----- mandatory form start -----*/}
						<div className="row">

							{/*--- exposure ---*/}
							<div className="col-md-6 pb-3">
								<label htmlFor="exposure" className="form-label">
									Exposure
								</label>
								<select className="form-control" id="exposure"
									value={exposure}
									onChange={e => handleExposure(e)} required>
									<option value=""></option>
									<option value="Mild">Mild</option>
									<option value="Moderate">Moderate</option>
									<option value="Severe">Severe</option>
									<option value="Very Severe">Very Severe</option>
									<option value="Extream Severe">Extream Severe</option>
								</select>
							</div>

							{/*--- slump_range ---*/}
							<div className="col-md-6 pb-3">
								<label htmlFor="slump_range" className="form-label">
									Slump Range
								</label>
								<select className="form-control" id="slump_range"
									value={slump_range}
									onChange={e => handleSlumpRange(e)} required>
									<option value=""></option>
									<option value="25-50">25-50</option>
									<option value="75-100">75-100</option>
									<option value="150-175">150-175</option>
								</select>
							</div>

							{/*--- f_prime_c ---*/}
							<div className="col-md-6 pb-3">
								<label htmlFor="f_prime_c" className="form-label">
									F&apos;c
								</label>
								<input type="number" className="form-control" id="f_prime_c"
									value={f_prime_c} 
									onChange={(e) => handleFprimeC(e)} required />
							</div>

							{/*--- water_cement_ratio ---*/}
							<div className="col-md-6 pb-3">
								<label htmlFor="water_cement_ratio" className="form-label">
									Water/Cement
								</label>
								<input type="number" className="form-control" id="water_cement_ratio"
									value={water_cement_ratio}
									onChange={e => setWater_cement_ratio(parseFloat(e.target.value))}
									onBlur={validateWaterCementRatio} required />
							</div>

							<div className="col-md-12 d-none">&nbsp;</div>
							<div className="col-md-6">
								<button type="button" className="btn btn-secondary w-100" 
									onClick={calculate}>
									Calculate
								</button>
							</div>
							<div className={`col-md-6 mt-2 mt-lg-0 ${loading === 100 && 'd-none'}`}>
								<div className="progress" role="progressbar" style={{ height: '38px' }}>
									<div className="progress-bar progress-bar-striped progress-bar-animated" 
									style={{ width: loading + '%' }}></div>
								</div>
							</div>
						</div>
						{/*----- mandatory form end -----*/}

						{/*----- calculated result section start -----*/}
						<div className={`row mt-5 mt-lg-0 ${!resultGenerated && 'd-none'}`}>
							<div className="col-md-12 py-2">
								<div className="border-bottom fw-bold">Trial Mix 01 (For 1 cubic meter concrete):</div>
								<ul className="list-group mt-1">
									{/*----- heading row -----*/}
									<li className="list-group-item list-group-item-primary">
										<div className="row">
											<div className="col-md-3">
												Items
											</div>
											<div className="col-md-3">
												Mass
											</div>
											<div className="col-md-3">
												Volume
											</div>
											<div className="col-md-3">
												Ratio
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Water:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_water} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_water / 1000).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													-
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Cement:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_cement / 1294).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement && ((mass_of_cement / 1294) / (mass_of_cement / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Fine Agg:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_fine_agg} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_fine_agg / 1295).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{ mass_of_cement && ((mass_of_fine_agg / 1295) / (mass_of_cement / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Coarse Agg:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_coarse_agg} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_coarse_agg / 1300).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement && ((mass_of_coarse_agg / 1300) / (mass_of_cement / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-md-12 py-2">
								<div className="border-bottom fw-bold">Trial Mix 02 (For 1 cubic meter concrete):</div>
								<ul className="list-group mt-1">
									{/*----- heading row -----*/}
									<li className="list-group-item list-group-item-primary">
										<div className="row">
											<div className="col-md-3">
												Items
											</div>
											<div className="col-md-3">
												Mass
											</div>
											<div className="col-md-3">
												Volume
											</div>
											<div className="col-md-3">
												Ratio
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Water <small>(kg)</small>:
											</div>
											<div className="col-md-3">
												<input type="number" className="form-control form-control-sm w-100 d-inline"
													value={mass_of_water_tm2}
													onBlur={calculate}
													onChange={e => setMass_of_water_tm2(parseFloat(e.target.value))} required />
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_water_tm2 / 1000).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													-
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Cement:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm2} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_cement_tm2 / 1294).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm2 && ((mass_of_cement_tm2 / 1294) / (mass_of_cement_tm2 / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Fine Agg:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_fine_agg_tm2} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_fine_agg_tm2 / 1295).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm2 && ((mass_of_fine_agg_tm2 / 1295) / (mass_of_cement_tm2/1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Coarse Agg:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_coarse_agg_tm2} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_coarse_agg_tm2 / 1300).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm2 && ((mass_of_coarse_agg_tm2 / 1300) / (mass_of_cement_tm2 / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-md-12 py-2">
								<div className="border-bottom fw-bold">Trial Mix 03 (For 1 cubic meter concrete):</div>
								<ul className="list-group mt-1">
									{/*----- heading row -----*/}
									<li className="list-group-item list-group-item-primary">
										<div className="row">
											<div className="col-md-3">
												Items
											</div>
											<div className="col-md-3">
												Mass
											</div>
											<div className="col-md-3">
												Volume
											</div>
											<div className="col-md-3">
												Ratio
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Water <small>(kg)</small>:
											</div>
											<div className="col-md-3">
												<input type="number" className="form-control form-control-sm w-100 d-inline"
													value={mass_of_water_tm3}
													onBlur={calculate}
													onChange={e => setMass_of_water_tm3(parseFloat(e.target.value))} required />
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_water_tm3 / 1000).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													-
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Cement:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm3} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_cement_tm3 / 1294).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm3 && ((mass_of_cement_tm3 / 1294) / (mass_of_cement_tm3 / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Fine Agg:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_fine_agg_tm3} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_fine_agg_tm3 / 1295).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm3 && ((mass_of_fine_agg_tm3 / 1295) / (mass_of_cement_tm3 / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
									{/*----- list row -----*/}
									<li className="list-group-item list-group-item-secondary">
										<div className="row">
											<div className="col-md-3">
												Coarse Agg:
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_coarse_agg_tm3} kg
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{(mass_of_coarse_agg_tm3 / 1300).toFixed(2)} cum
												</span>
											</div>
											<div className="col-md-3">
												<span className="text-primary">
													{mass_of_cement_tm3 && ((mass_of_coarse_agg_tm3 / 1300) / (mass_of_cement_tm3 / 1294)).toFixed(1)}
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						{/*----- calulated result section end -----*/}
					</div>

					{/*----- information list start -----*/}
					<div className="col-md-5 mt-5 mt-lg-0">
						<div className="border-bottom fw-bold">Calculated Informations:</div>
						<ul className="list-group mt-1">
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										F&apos;cr :	
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{f_prime_cr || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										W/C for strength:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{wc_for_strength || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Maximum W/C for exposure:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{max_wc_for_exposure || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Governing W/C:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{governing_wc || '***'}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Maximum size of Coarse Agg:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{max_size_coarse_agg} mm
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Specific Gravity of Cement:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{specific_gravity_cement}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Specific Gravity of Fine Agg:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{specific_gravity_fine_agg}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Specific Gravity of Coarse Agg:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{specific_gravity_coarse_agg}
										</span>
									</div>
								</div>
							</li>
							{/*----- list row -----*/}
							<li className="list-group-item">
								<div className="row">
									<div className="col-md-8">
										Entrapped Air:
									</div>
									<div className="col-md-4">
										<span className="text-primary">
											{entrapped_air} %
										</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					{/*----- information list end -----*/}
				</div>
			</div>

			<div className="container mb-5 d-none">
				<div className="row border bg-light my-3 py-3">
					{/*----- information details start -----*/}
					<div className="col-md-6">
					</div>
					{/*----- information details end -----*/}

					{/*----- result details start -----*/}
					<div className="col-md-6">
					</div>
					{/*----- result details end -----*/}
				</div>
			</div>
		</Fragment>
	)
}
