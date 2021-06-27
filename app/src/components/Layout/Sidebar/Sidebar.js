/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars, faCalendarAlt, faExclamation, faInbox, faSignOutAlt, faSpa,
} from '@fortawesome/free-solid-svg-icons'

const OptionRoute = ({ route, icon }) => {
  const router = useRouter()
  return (
    <div className="px-2">
      <div className="hover:bg-gray-200 rounded-full">
        <div className={router.pathname === route ? 'bg-gray-200 rounded-full' : ''}>
          <Link href={route}>
            <a>
              <div className="text-center p-3">
                <FontAwesomeIcon className="text-xl text-black" icon={icon} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Sidebar() {
  return (
    <div className="w-16 h-full bg-white rounded-full py-4">
      <div className="flex flex-col h-full">
        <div className="flex-initial border-b border-gray-300 py-2">
          <OptionRoute route="/" icon={faBars} />
        </div>
        <div className="flex-auto flex flex-col gap-8 border-b border-gray-300 py-4">
          <OptionRoute route="/inbox" icon={faInbox} />
          <OptionRoute route="/calendar" icon={faCalendarAlt} />
          <OptionRoute route="/incubator" icon={faSpa} />
          <OptionRoute route="/" icon={faExclamation} />
        </div>
        <div className="flex-initial py-2">
          <OptionRoute route="/logout" icon={faSignOutAlt} />
        </div>
      </div>
    </div>
  )
}
