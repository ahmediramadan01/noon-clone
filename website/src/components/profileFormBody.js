"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Typography, Button } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

export function ProfileFormBody() {
	const { countries } = useCountries();

	const session = useSession();
	const [userFirstName, setUserFirstName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userPhoneNumber, setUserPhoneNumber] = useState("");
	const [userBirthday, setUserBirthday] = useState("");
	const [userGender, setUserGender] = useState("");
	const [userNationality, setUserNationality] = useState("");

	useEffect(() => {
		if (session.status === "authenticated") {
			const { user } = session.data;
			setUserEmail(user.email);
			setUserFirstName(user.firstName);
			setUserLastName(user.lastName);
			setUserPhoneNumber(user.phoneNumber);
			setUserBirthday(user.birthday);
			setUserGender(user.gender);
			setUserNationality(user.nationality);
		}
	}, [session]);

	return (
		<>
			<div className="basis-5/6">
				<div className=" top-52 absolute right-16 text-sm text-blue-500">Need Help?</div>

				<div className="flex-row  bg-white ms-5 h-28 mt-20 mr-5 col-span-10"></div>

				<div className="py-4 bg-white mx-5 h-auto mb-10 mt-8 mr-5 md:col-span-10 md:grid md:grid-cols-3 md:gap-4">
					<Typography variant="h5" color="blue-gray">
						<p className="pb-4 md:ms-4">Profile Info</p>
					</Typography>
					<div className="block md:col-span-12">
						<div className="md:flex md:flex-wrap mt-4">
							<div className="block w-full md:w-1/3 md:pr-4">
								<label className="md:ms-4 text-sm">Email</label>
								<br />
								<input
									value={userEmail}
									onChange={(event) => setUserEmail(event.target.value)}
									type="text"
									className="rounded-sm w-10/12 h-10 border-2 border-gray-200 mt-2 md:ms-4 px-2"
									id="email"
								/>
							</div>
							<div className="block w-full md:w-1/3 md:pr-4">
								<label className="md:ms-4 text-sm">First name</label>
								<br />
								<input
									value={userFirstName}
									onChange={(event) => setUserFirstName(event.target.value)}
									type="text"
									className="rounded-sm w-10/12 h-10 border-2 border-gray-200 mt-2 md:ms-4 px-2"
									id="firstName"
								/>
							</div>
							<div className="block w-full md:w-1/3">
								<label className="md:ms-4 text-sm">Last name</label>
								<br />
								<input
									value={userLastName}
									onChange={(event) => setUserLastName(event.target.value)}
									type="text"
									className="rounded-sm w-10/12 h-10 border-2 border-gray-200 mt-2 md:ms-4 px-2"
									id="lastName"
								/>
							</div>
						</div>
						<div className="md:flex md:flex-wrap mt-4">
							<div className="block w-full md:w-1/3 md:pr-4">
								<label className="md:ms-4 text-sm">Phone number</label>
								<br />
								<input
									value={userPhoneNumber}
									onChange={(event) => setUserPhoneNumber(event.target.value)}
									type="text"
									className="rounded-sm w-10/12 h-10 border-2 border-gray-200 mt-2 md:ms-4 px-2"
									id="phoneNumber"
								/>
								<br />
								<span className=" text-xs md:ms-4">This can be used to login across all noon apps.</span>
							</div>
							<div className="block w-full md:w-1/3 md:pr-4">
								<label className="md:ms-4 text-sm ">Birthday</label>
								<br />
								<input
									value={userBirthday}
									onChange={(event) => setUserBirthday(event.target.value)}
									type="date"
									className="rounded-sm w-10/12 h-10 border-2 border-gray-200 mt-2 md:ms-4 px-2"
									id="birthday"
								/>
								<br />
								<span className=" text-xs md:ms-4">Get offers on your special day!</span>
							</div>
							<div className="block w-full md:w-1/3">
								<label className="md:ms-4 text-sm">Gender</label>
								<br />
								<div className="flex mt-2">
									<Button variant="text" className="px-3 py-4 rounded-full ms-3 bg-gray-200 flex items-center">
										<svg width="9" height="18" viewBox="0 0 7 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												id="Vector"
												d="M3.5 0C4.03043 0 4.53914 0.210714 4.91421 0.585786C5.28929 0.960859 5.5 1.46957 5.5 2C5.5 2.53043 5.28929 3.03914 4.91421 3.41421C4.53914 3.78929 4.03043 4 3.5 4C2.96957 4 2.46086 3.78929 2.08579 3.41421C1.71071 3.03914 1.5 2.53043 1.5 2C1.5 1.46957 1.71071 0.960859 2.08579 0.585786C2.46086 0.210714 2.96957 0 3.5 0ZM2 5H5C5.53043 5 6.03914 5.21071 6.41421 5.58579C6.78929 5.96086 7 6.46957 7 7V12.5H5.5V18H1.5V12.5H0V7C0 6.46957 0.210714 5.96086 0.585786 5.58579C0.960859 5.21071 1.46957 5 2 5Z"
												fill="#9e9e9e"
											/>
										</svg>
										<p className="ms-2">Male</p>
									</Button>
									<Button variant="text" className="px-3 py-4 rounded-full ms-3 bg-gray-200 flex items-center">
										<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												id="Vector"
												d="M4.5 0C5.03043 0 5.53914 0.210714 5.91421 0.585786C6.28929 0.960859 6.5 1.46957 6.5 2C6.5 2.53043 6.28929 3.03914 5.91421 3.41421C5.53914 3.78929 5.03043 4 4.5 4C3.96957 4 3.46086 3.78929 3.08579 3.41421C2.71071 3.03914 2.5 2.53043 2.5 2C2.5 1.46957 2.71071 0.960859 3.08579 0.585786C3.46086 0.210714 3.96957 0 4.5 0ZM3 18V14H0L2.59 6.41C2.84 5.59 3.6 5 4.5 5C5.4 5 6.16 5.59 6.41 6.41L9 14H6V18H3Z"
												fill="#9e9e9e"
											/>
										</svg>
										<p className="ms-2">Female</p>
									</Button>
								</div>
							</div>
						</div>
						<div className="md:flex md:flex-wrap mt-4">
							<div className="block w-full md:w-1/3 md:pr-4 ms-4">
								<label className="text-sm">Nationality</label>
								<br />
								<div className="w-10/12 h-10 mt-2">
									<Select
										className="rounded-sm"
										size="lg"
										selected={(element) =>
											element &&
											React.cloneElement(element, {
												disabled: true,
												className: "flex items-center opacity-100  px-0 gap-2 pointer-events-none",
											})
										}
									>
										{countries.map(({ name }) => (
											<Option key={name} value={name} className="flex items-center gap-2">
												{name}
											</Option>
										))}
									</Select>
								</div>
							</div>
						</div>
						<Button
							className="mt-8 ms-4 px-6 bg-blue-800 rounded-sm"
							onClick={() =>
								session.update({
									email: userEmail,
									firstName: userFirstName,
									lastName: userLastName,
									phoneNumber: userPhoneNumber,
									birthday: userBirthday,
									gender: userGender,
									nationality: userNationality,
								})
							}
						>
							Update Profile
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
