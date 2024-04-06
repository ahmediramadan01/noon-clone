"use client"
import {
    Typography,
    Button,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
import OrderCard from "./order-card";
export function ProfileFormbody() {
    const { countries } = useCountries();
    return (<>

        <div className="basis-5/6">

            <div className=" mx-5 my-5 h-32 text-sm text-blue-500 bg-white text-right p-5">Need Help?</div>

            {/* orders cards */}
            <div className=" text-sm text-blue-500 bg-white mx-5 my-5 h-32">
                <OrderCard />
            </div>

            <div className="bg-white mx-5 h-auto mb-10 mt-8 mr-5 md:col-span-10 md:grid md:grid-cols-3 md:gap-4">
                <Typography variant="h5" color="blue-gray">
                    <p className="p-4 pt-4 md:ms-4">Profile Info</p>
                </Typography>
                <div className="block md:col-span-12">
                    <div className="md:flex md:flex-wrap mt-4">
                        <div className="block w-full md:w-1/3 md:pr-4">
                            <label className="md:ms-4 text-sm">Email</label>
                            <br />
                            <input
                                type="text"
                                className="w-10/12 h-10 border-2 border-gray-200 mt-2 rounded-lg md:ms-4"
                                placeholder="Email"
                                id="email1"
                            />
                        </div>
                        <div className="block w-full md:w-1/3 md:pr-4">
                            <label className="md:ms-4 text-sm">First name</label>
                            <br />
                            <input
                                type="text"
                                className="w-10/12 h-10 border-2 border-gray-200 mt-2 rounded-lg md:ms-4"
                                placeholder="First name"
                                id="first-name"
                            />
                        </div>
                        <div className="block w-full md:w-1/3">
                            <label className="md:ms-4 text-sm">Last name</label>
                            <br />
                            <input
                                type="text"
                                className="w-10/12 h-10 border-2 border-gray-200 mt-2 rounded-lg md:ms-4"
                                placeholder="Last name"
                                id="last-name"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:flex-wrap mt-4">
                        <div className="block w-full md:w-1/3 md:pr-4">
                            <label className="md:ms-4 text-sm">phone number</label>
                            <br />
                            <input
                                type="number"
                                className="w-10/12 h-10 border-2 border-gray-200 mt-2 rounded-lg md:ms-4"
                                placeholder="phone"
                                id="email1"
                            />
                            <br />
                            <span className=" text-xs md:ms-4">This can be used to login across all noon apps.</span>
                        </div>
                        <div className="block w-full md:w-1/3 md:pr-4">
                            <label className="md:ms-4 text-sm ">Birthdate</label>
                            <br />
                            <input
                                type="date"
                                className="w-10/12 h-10 border-2 border-gray-200 mt-2 rounded-lg md:ms-4"
                                placeholder="Birthdate"
                                id="first-name"
                            />
                            <br />
                            <span className=" text-xs md:ms-4">Get offers on your special day!</span>
                        </div>
                        <div className="block w-full md:w-1/3">
                            <label className="md:ms-4 text-sm">Gender</label>
                            <br />
                            <div className="flex ">
                                <Button variant="text" className="rounded-full bg-blue-200 flex md:w-1/2 lg:w-28 ">
                                    <svg width="7" height="18" viewBox="0 0 7 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            id="Vector"
                                            d="M3.5 0C4.03043 0 4.53914 0.210714 4.91421 0.585786C5.28929 0.960859 5.5 1.46957 5.5 2C5.5 2.53043 5.28929 3.03914 4.91421 3.41421C4.53914 3.78929 4.03043 4 3.5 4C2.96957 4 2.46086 3.78929 2.08579 3.41421C1.71071 3.03914 1.5 2.53043 1.5 2C1.5 1.46957 1.71071 0.960859 2.08579 0.585786C2.46086 0.210714 2.96957 0 3.5 0ZM2 5H5C5.53043 5 6.03914 5.21071 6.41421 5.58579C6.78929 5.96086 7 6.46957 7 7V12.5H5.5V18H1.5V12.5H0V7C0 6.46957 0.210714 5.96086 0.585786 5.58579C0.960859 5.21071 1.46957 5 2 5Z"
                                            fill="#345DC4"
                                        />
                                    </svg>
                                    <p className="ms-2">Mail</p>
                                </Button>
                                <Button variant="text" className="rounded-full ms-3 bg-pink-200 flex md:w-1/2 lg:w-28">
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            id="Vector"
                                            d="M4.5 0C5.03043 0 5.53914 0.210714 5.91421 0.585786C6.28929 0.960859 6.5 1.46957 6.5 2C6.5 2.53043 6.28929 3.03914 5.91421 3.41421C5.53914 3.78929 5.03043 4 4.5 4C3.96957 4 3.46086 3.78929 3.08579 3.41421C2.71071 3.03914 2.5 2.53043 2.5 2C2.5 1.46957 2.71071 0.960859 3.08579 0.585786C3.46086 0.210714 3.96957 0 4.5 0ZM3 18V14H0L2.59 6.41C2.84 5.59 3.6 5 4.5 5C5.4 5 6.16 5.59 6.41 6.41L9 14H6V18H3Z"
                                            fill="#D72B66"
                                        />
                                    </svg>
                                    <p className="ms-2">Femail</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:flex-wrap mt-4">
                        <div className="block w-full md:w-1/3 md:pr-4 ms-4">
                            <label className="md:ms-4 text-sm">Nationality</label>
                            <br />
                            <div className="w-72">
                                <Select
                                    size="lg"
                                    label="Select Country"
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
                    <Button className="mt-8 ms-4 bg-blue-800 lg:w-60 md:w-60 mb-4 sm:w-3/4" disabled>
                        Update Profile
                    </Button>
                </div>
            </div>
        </div>
    </>)
}