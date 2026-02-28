import React from "react";
import './Domain.css';

const Domain = () =>{
    return(
        <div>
    <h1>State Vs Props</h1>
    <table>


        <thead>
          <tr>
            <th>Feature</th>
            <th>State</th>
            <th>Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scope</td>
            <td>Managed internally within the component.</td>
            <td>Passed from a parent to a child component.</td>
          </tr>
          <tr>
            <td>Mutable?</td>
            <td>✅ Yes</td>
            <td>❌ No </td>
          </tr>
          <tr>
            <td>Ownership</td>
            <td>The component itself</td>
            <td>Parent component</td>
          </tr>
          <tr>
            <td>Purpose</td>
            <td>Manage dynamic data</td>
            <td>Share data between components</td>
          </tr>
          <tr>
            <td>Best Use Case</td>
            <td>Passing static or external data</td>
            <td>Handling user interaction</td>
          </tr>
          <tr>
            <td>Default Values</td>
            <td>Can define defaultProps</td>
            <td>Initial state defined inside component ()</td>
          </tr>
        </tbody>
    </table>
    </div>
    
    )
}

export default Domain;