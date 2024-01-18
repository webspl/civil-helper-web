'use client';
import React, { useState, useEffect } from 'react';

export default function Loading() {
	const [loading, setLoading] = useState(true);
	
	// set preloader off after content generated.
	useEffect(() => {
		setLoading(false);
	});
	
	return (loading && 
	(<div class="vh-100">
		<div class="h-50" >
			<div className="h-100 d-flex align-items-center justify-content-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</div>
	</div>));
}
