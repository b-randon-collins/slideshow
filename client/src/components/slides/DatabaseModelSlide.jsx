import React, { useEffect } from 'react';
import { jsPlumb } from 'jsplumb';
import './DatabaseModelSlide.css';

const DatabaseModelSlide = () => {
    useEffect(() => {
        const instance = jsPlumb.getInstance({
            PaintStyle: { stroke: "dodgerblue", strokeWidth: 2 },
            Endpoint: "Dot",
            EndpointStyle: { fill: "dodgerblue", radius: 5 },
            connector: ["Bezier", { curviness: 200 }],
        });

        const createConnection = (source, target, anchors, connectorConfig, verticalOffsets) => {
            const [sourceOffset, targetOffset] = verticalOffsets;
            instance.connect({
                source,
                target,
                anchors,
                endpoint: ["Dot", { radius: 5 }],
                connector: ["Flowchart", connectorConfig],
                overlays: [
                    ["Arrow", { location: 1, width: 10, length: 10 }]
                ],
            });

            const sourceEndpoint = instance.getEndpoint(source);
            const targetEndpoint = instance.getEndpoint(target);
            if (sourceEndpoint) {
                sourceEndpoint.setOffset([0, sourceOffset]);
            }
            if (targetEndpoint) {
                targetEndpoint.setOffset([0, targetOffset]);
            }
        };

        // createConnection(
        //     'PostTable_user_id',
        //     'UserTable_id',
        //     ["Right", "Left"],
        //     { stub: [20, 40], gap: 10 },
        //     [-10, 10]
        // );

        // createConnection(
        //     'CommentTable_post_id',
        //     'PostTable_id',
        //     ["Right", "Left"],
        //     { stub: [20, 20], gap: 10 },
        //     [10, -10]
        // );

        // createConnection(
        //     'CommentTable_user_id',
        //     'UserTable_id',
        //     ["Right", "Left"],
        //     { stub: [30, 30], gap: 10 },
        //     [10, 0]
        // );

        // createConnection(
        //     'LikesTable_user_id',
        //     'UserTable_id',
        //     ["Right", "Left"],
        //     { stub: [30, 20], gap: 10 },
        //     [10, -10]
        // );

        // createConnection(
        //     'LikesTable_post_id',
        //     'PostTable_id',
        //     ["Right", "Left"],
        //     { stub: [20, 20], gap: 10 },
        //     [10, -10]
        // );

        instance.repaintEverything();
    }, []);

    return (
        <div className="database-model-slide ">
            <h2>Database Models</h2>
            <table className="models-container">
                <tr>
                    <td colSpan={3}>
                        <div className="model UserTable" id="UserTable">
                            <h3>User</h3>
                            <table className="model-attributes">
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Type</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="UserTable_id">
                                        <td>id</td><td>Integer</td><td>Primary Key</td>
                                    </tr>
                                    <tr>
                                        <td>username</td><td>String</td><td>Unique</td>
                                    </tr>
                                    <tr>
                                        <td>email</td><td>String</td><td>Unique</td>
                                    </tr>
                                    <tr>
                                        <td>password</td><td>String</td><td>Hashed</td>
                                    </tr>
        
                                </tbody>
                            </table>
                            <p>Relationships: One-to-Many (Posts), Many-to-Many (Likes)</p>
                        </div>
                    </td>
                </tr>
               
                <tr>
                    <td>
                        <div className="model PostTable" id="PostTable">
                            <h3>Post</h3>
                            <table className="model-attributes">
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Type</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="PostTable_id">
                                        <td>id</td><td>Integer</td><td>Primary Key</td>
                                    </tr>
                                    <tr>
                                        <td>content</td><td>Text</td><td></td>
                                    </tr>
                                    <tr>
                                        <td>created_at</td><td>DateTime</td><td></td>
                                    </tr>
                                    <tr id="PostTable_user_id">
                                        <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Relationships: One-to-Many (Comments), Many-to-One (User)</p>
                        </div>
                    </td>
                    <td>
                        <div className="model LikesTable" id="LikesTable">
                        <h3>Likes</h3>
                        <table className="model-attributes">
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Type</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="LikesTable_id">
                                    <td>id</td><td>Integer</td><td>Primary Key</td>
                                </tr>
                                <tr id="LikesTable_user_id">
                                    <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                                </tr>
                                <tr id="LikesTable_post_id">
                                    <td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Relationships: Many-to-Many (Users and Posts)</p>
                        </div>
                    </td>
                    <td>
                        <div className="model CommentTable" id="CommentTable">
                            <h3>Comment</h3>
                            <table className="model-attributes">
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Type</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="CommentTable_id">
                                        <td>id</td><td>Integer</td><td>Primary Key</td>
                                    </tr>
                                    <tr>
                                        <td>content</td><td>Text</td><td></td>
                                    </tr>
                                    <tr>
                                        <td>created_at</td><td>DateTime</td><td></td>
                                    </tr>
                                    <tr id="CommentTable_post_id">
                                        <td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td>
                                    </tr>
                                    <tr id="CommentTable_user_id">
                                        <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Relationships: Many-to-One (Post, User)</p>
                        </div>
                    </td>
                </tr>
            </table>
            <div className="relationship-canvas" id="relationshipCanvas"></div>
        </div>
    );
};

export default DatabaseModelSlide;
