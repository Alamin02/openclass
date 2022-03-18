import { spawn } from 'child_process'
import React, { useState, useEffect } from 'react'

export default function Admin() {
  const [usersData, setUsersData] = useState<any[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsersData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          setUsersData(data)
          setLoading(false)
        })
    }
    fetchUsersData()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!usersData) return <p>No profile data</p>

  return (
    <div className="m-2">
      <p className="mb-4 text-3xl">Dummy Admin Table</p>
      <div className="overflow-auto border border-gray-200 rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b-2 gap-x-3 bg-gray-50">
              <th className="p-3 font-semibold tracking-wide text-left">ID</th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Address
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Company
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Contact No
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=""></tr>
            {usersData.map((item, index) => (
              <tr key={index} className="odd:bg-gray-50">
                <td className="p-3 text-gray-500">{item.id}</td>
                <td className="p-3">
                  <span className="font-semibold">{item.name}</span>
                  <br />
                  <span className="italic text-gray-500">
                    ({item.username})
                  </span>
                </td>
                <td className="p-3 text-gray-500">{item.email}</td>
                <td className="p-3">
                  <span className="font-semibold">{item.address.city}</span>
                  <br />
                  <span className="text-gray-500">{item.address.street}</span>
                </td>
                <td className="p-3">
                  <span>{item.company.name}</span>
                  <br />
                  <a href="#" className="text-blue-600 underline">
                    {item.website}
                  </a>
                </td>
                <td className="p-3 text-gray-500">{item.phone}</td>
                <td className="p-3">
                  {item.id % 2 === 0 && item.id % 4 === 0 ? (
                    <span className="px-2 py-1 text-sm font-semibold tracking-wide text-green-900 uppercase bg-green-100 rounded-md">
                      offline
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-sm font-semibold tracking-wide text-red-900 uppercase bg-red-100 rounded-md">
                      online
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
