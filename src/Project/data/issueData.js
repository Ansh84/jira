export const issueData =
    [
        {
            "id": 851201,
            "title": "Try dragging issues to different columns to transition their status.",
            "type": "bug",
            "status": "backlog",
            "priority": "3",
            "listPosition": 3,
            "createdAt": "2022-12-30T11:16:46.916Z",
            "updatedAt": "2022-12-30T11:16:46.916Z",
            "userIds": []
        },
        {
            "id": 851202,
            "title": "Click on an issue to see what's behind it.",
            "type": "task",
            "status": "backlog",
            "priority": "2",
            "listPosition": 2,
            "createdAt": "2022-12-30T11:16:46.917Z",
            "updatedAt": "2022-12-30T11:16:46.917Z",
            "userIds": [
                314625
            ]
        },
        {
            "id": 851203,
            "title": "This is an issue of type: Task.",
            "type": "task",
            "status": "backlog",
            "priority": "4",
            "listPosition": 1,
            "createdAt": "2022-12-30T11:16:46.917Z",
            "updatedAt": "2022-12-30T11:16:46.917Z",
            "userIds": [
                314625
            ]
        },
        {
            "id": 851204,
            "title": "Each issue has a single reporter but can have multiple assignees.",
            "type": "story",
            "status": "selected",
            "priority": "4",
            "listPosition": 6,
            "createdAt": "2022-12-30T11:16:46.937Z",
            "updatedAt": "2022-12-30T11:16:46.937Z",
            "userIds": [
                314623,
                314624
            ]
        },
        {
            "id": 851205,
            "title": "You can track how many hours were spent working on an issue, and how many hours remain.",
            "type": "task",
            "status": "inprogress",
            "priority": "1",
            "listPosition": 7,
            "createdAt": "2022-12-30T11:16:46.937Z",
            "updatedAt": "2022-12-30T11:16:46.937Z",
            "userIds": []
        },
        {
            "id": 851207,
            "title": "Try leaving a comment on this issue.",
            "type": "task",
            "status": "done",
            "priority": "3",
            "listPosition": 7,
            "createdAt": "2022-12-30T11:16:46.942Z",
            "updatedAt": "2022-12-30T11:16:46.942Z",
            "userIds": [
                314624
            ]
        },
        {
            "id": 851208,
            "title": "You can use rich text with images in issue descriptions.",
            "type": "story",
            "status": "backlog",
            "priority": "1",
            "listPosition": 4,
            "createdAt": "2022-12-30T11:16:46.947Z",
            "updatedAt": "2022-12-30T11:16:46.947Z",
            "userIds": [
                314623
            ]
        },
        {
            "id": 851206,
            "title": "Each issue can be assigned priority from lowest to highest.",
            "type": "task",
            "status": "inprogress",
            "priority": "5",
            "listPosition": 8,
            "createdAt": "2022-12-30T11:16:46.943Z",
            "updatedAt": "2022-12-30T18:18:55.433Z",
            "userIds": []
        }
    ]



export const users =  [
    {
        "id": 314625,
        "name": "Pickle Rick",
        "email": "rick@jira.guest",
        "avatarUrl": "https://i.ibb.co/7JM1P2r/picke-rick.jpg",
        "createdAt": "2022-12-30T11:16:46.904Z",
        "updatedAt": "2022-12-30T11:16:46.908Z",
        "projectId": 104627
    },
    {
        "id": 314624,
        "name": "Baby Yoda",
        "email": "yoda@jira.guest",
        "avatarUrl": "https://i.ibb.co/6n0hLML/baby-yoda.jpg",
        "createdAt": "2022-12-30T11:16:46.901Z",
        "updatedAt": "2022-12-30T11:16:46.908Z",
        "projectId": 104627
    },
    {
        "id": 314623,
        "name": "Lord Gaben",
        "email": "gaben@jira.guest",
        "avatarUrl": "https://i.ibb.co/6RJ5hq6/gaben.jpg",
        "createdAt": "2022-12-30T11:16:46.899Z",
        "updatedAt": "2022-12-30T11:16:46.908Z",
        "projectId": 104627
    }
]

export const project = {
    "id": 104627,
    "name": "singularity 1.0",
    "url": "https://www.atlassian.com/software/jira",
    "description": "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
    "category": "software",
    "createdAt": "2022-12-30T11:16:46.908Z",
    "updatedAt": "2022-12-30T11:16:46.908Z",
}