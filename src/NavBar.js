import React from 'react'

export default function NavBar() {
  return (
    <div className="navBar">
        <ul className="nav">
            <li className="samsung">Samsung</li>
            <li><button>Shop</button></li>
            <li><button>Mobile</button></li>
            <li><button>TV & AV</button></li>
            <li><button>Home Appliances</button></li>
            <li><button>Computing</button></li>
            <li><button>Displays</button></li>
            <li><button>Accessories</button></li>
            <li><button>SmartThings</button></li>
            <li><button>#YouMake</button></li>

            <li className="right"><button>Profile</button></li>
            <li className="right"><button>Basket</button></li>
            <li className="right"><button>Search</button></li>
            <li className="right"><button>For Business</button></li>
            <li className="right"><button>Support</button></li>
        </ul>
    </div>
  )
}
