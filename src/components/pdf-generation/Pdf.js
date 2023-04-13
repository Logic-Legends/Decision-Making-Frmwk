import React from "react";
import { Page, Text, View, StyleSheet, Image, Link } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flexDirection: "flex",
    },
    page1: {
        backgroundColor: "white",
        flexDirection: "flex",
        padding: "40px 40px 40px 40px"
    },
    header: {
        fontSize: "19px",
        textAlign: "center",
        marginTop: "15px",
    },
    subtitle: {
        fontSize: "17px",
        textAlign: "left",
        margin: "15px auto 0px 20px",
        fontWeight: "bold"
    },
    text: {
        margin: "10px 20px 0px 20px",
        fontSize: "12px",
        textAlign: "left",
        fontFamily: "Times-Roman",
    },
    textResponse: {

        fontSize: "14px",
        textAlign: "left",
        fontFamily: "Times-Roman",


    },
    questions: {
        margin: "15px auto 0px 20px",
        fontSize: "16px",
        textAlign: "left",
        fontFamily: "Times-Roman",
        fontWeight: "demibold",
    },
    responses: {

        fontSize: "14px",
        textAlign: "left",
        fontFamily: "Times-Roman",
        fontWeight: "ultrabold",
        color: "#37929b",

    },
    table: {
        margin: "20px auto 20px auto",
        display: "table",
        width: "auto",
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
        minHeight: "50px",
        borderWidth: "1px",
        borderBottomStyle: "solid",
        borderTopStyle: "solid",
        borderRightWidth: "0px",
        borderLeftWidth: "0px",
    },
    tableRow2: {
        margin: "auto",
        flexDirection: "row",
        minHeight: "50px",
        borderWidth: "1px",
        borderBottomStyle: "solid",
        borderTopStyle: "solid",
        borderRightWidth: "0px",
        borderLeftWidth: "0px",
        borderColor: "#d9d9d9",
    },
    tableRow1: {
        margin: "auto",
        flexDirection: "row",
        minHeight: "50px",
    },

    tableCol1: {
        width: "25%",
        borderWidth: "1px",
        borderLeftStyle: "solid",
        borderRightStyle: "solid",
        borderBottomWidth: "0px",
        borderTopWidth: "0px",
    },
    tableColBottom: {
        width: "25%",
        borderWidth: "1px",
        borderLeftStyle: "solid",
        borderRightStyle: "solid",
        borderTopWidth: "0px",
    },
    tableColBottom2: {
        width: "65%",
        borderWidth: "1px",
        borderRightStyle: "solid",
        borderTopWidth: "0px",
        borderLeftWidth: "0px",
    },
    tableCol2: {
        width: "65%",
        borderWidth: "1px",
        borderBottomWidth: "0px",
        borderTopWidth: "0px",
        borderLeftWidth: "0px",
        borderStyle: "solid",
    },

    tableCol21: {
        width: "29%",
        borderWidth: "1px",
        borderBottomWidth: "0px",
        borderTopWidth: "0px",
        borderStyle: "solid",
    },
    tableCol3: {
        width: "92%",
        borderWidth: "1px",
        borderBottomWidth: "0px",
        borderTopWidth: "0px",
        borderStyle: "solid",
        borderColor: "#d9d9d9",
    },
    tableCol22: {
        width: "29%",
    },
    tableCol23: {
        width: "29%",
        borderWidth: "1px",
        borderBottomWidth: "0px",
        borderTopWidth: "0px",
        borderStyle: "solid",
    },
    tableCol21Bottom: {
        width: "29%",
        borderWidth: "1px",
        borderTopWidth: "0px",
        borderStyle: "solid",
        borderBottomWidth: "1px",
    },
    tableCol22Bottom: {
        width: "29%",
        borderBottomWidth: "1px",
        borderStyle: "solid",
    },
    tableCol23Bottom: {
        width: "29%",
        borderWidth: "1px",
        borderBottomWidth: "1px",
        borderTopWidth: "0px",
        borderStyle: "solid",
    },
    tableCell: {
        paddingL: "10px",
        margin: "auto",
        fontSize: 10,
        textAlign: "left",
    },
    tableCell2: {
        margin: "10px",
        fontSize: 10,
        textAlign: "left",
    },

    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    tableTopic: {
        margin: "auto",
        fontSize: 12,
        fontStyle: "bold",
    },
    tableTopic1: {
        margin: "10px",
        fontSize: 12,
        fontStyle: "bold",
        textAlign: "left",
    },
    tableHeader: {
        backgroundColor: "#d9d9d9",
        margin: "auto",
        flexDirection: "row",
        minHeight: "50px",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
    },
    tableHeader1: {
        backgroundColor: "#c3e6e8",
        margin: "auto",
        flexDirection: "row",
        minHeight: "30px",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        textAlign: "left",
        borderColor: "#d9d9d9",
    },

    //New
    title: {
        fontWeight: "bold",
        textAlign: "left",
    },
    subtitle1: {
        marginTop: 20,
    },
    paragraph: {
        marginTop: 10,
        marginBottom: 10,
    },
    tableRowRes: {
        flexDirection: "row",
    },
    tableCellRes: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#000",
    },
    hr: {
        margin: "15px 20px 10px 20px",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    displayOfResponses: {
        flexDirection: "row",
        marginLeft: "20px",
        marginBottom: "10px",
        marginTop: "15px",
    },
    image: {
        height: "40px",
        width: "170px",
        marginLeft: "20px",
        marginBottom: "15px",

    },
});


export default function Pdf(props) {
    const { selectedOptionAmountOfInformation } = props;
    const { selectedOption } = props;
    const { selectedOptionTypeOfInformation } = props;
    const { selectedOptionDecision } = props;
    const { selectedOptionCapacity } = props;
    const { defineGoalText } = props;
    const { users } = props;
    const { explicitVotingMethod } = props;
    const { relativeVotingMethod1 } = props;
    const { relativeVotingMethod2 } = props;
    const { questionStep1 } = props;
    const { questionStep2 } = props;
    const { questionStep3 } = props;
    const { questionStep4 } = props;
    const { questionStep5 } = props;
    const { questionStep6 } = props;
    const { questionStep7 } = props;
    const { approvalExplicitDesc } = props;
    const { scoreExplicitDesc } = props;
    const { delphiExplicitDesc } = props;
    const { fisrtRelativeDesc } = props;
    const { multiRelativeDesc } = props;
    const { starRelativeDesc } = props;
    const { rankRelativeDesc } = props;
    const { delphiRelativeDesc } = props;
    const { qRelativeDesc } = props;

    return (
        <div>
            <Page style={styles.page1}>
                <Image style={styles.image} src="https://i.ibb.co/ZM6bQtv/logo-1.png" fixed />
                <Text style={styles.text} >
                    Thank you for using the Voting Methods for Group Decisions tool!
                </Text>
                <Text style={styles.subtitle} >Recommended Voting Method(s)</Text>
                <Text style={styles.text} >
                    We hope the recommended voting method(s) below will help you make
                    an informed decision.
                </Text>
                <div> {selectedOptionTypeOfInformation === "Explicit" ? (

                    <View style={styles.table}>
                        <View style={styles.tableHeader1}>
                            <View style={styles.tableCol3}>
                                <Text style={styles.tableTopic1}>{explicitVotingMethod}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow2}>
                            <View style={styles.tableCol3}>
                                <Text style={styles.tableCell2}>
                                    {explicitVotingMethod === "Approval voting"
                                        ? approvalExplicitDesc
                                        : explicitVotingMethod === "Score voting"
                                            ? scoreExplicitDesc
                                            : explicitVotingMethod === "Delphi method"
                                                ? delphiExplicitDesc
                                                : null}
                                </Text>
                            </View>
                        </View>
                    </View>) :

                    (<><View style={styles.table}>
                        <View style={styles.tableHeader1}>
                            <View style={styles.tableCol3}>
                                <Text style={styles.tableTopic1}>{relativeVotingMethod1}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow2}>
                            <View style={styles.tableCol3}>
                                <Text style={styles.tableCell2}>
                                    {relativeVotingMethod1 === "First past the post"
                                        ? fisrtRelativeDesc
                                        : relativeVotingMethod1 === "Multivoting"
                                            ? multiRelativeDesc
                                            : relativeVotingMethod1 === "STAR voting"
                                                ? starRelativeDesc
                                                : relativeVotingMethod1 === "Ranked choice"
                                                    ? rankRelativeDesc
                                                    : relativeVotingMethod1 === "Delphi method"
                                                        ? delphiRelativeDesc
                                                        : relativeVotingMethod1 === "Quadratic voting"
                                                            ? qRelativeDesc
                                                            : null}
                                </Text>
                            </View>
                        </View>
                    </View><View style={styles.table}>
                            <View style={styles.tableHeader1}>
                                <View style={styles.tableCol3}>
                                    <Text style={styles.tableTopic1}>
                                        {relativeVotingMethod2}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tableRow2}>
                                <View style={styles.tableCol3}>
                                    <Text style={styles.tableCell2}>
                                        {relativeVotingMethod2 === "Multivoting"
                                            ? multiRelativeDesc
                                            : relativeVotingMethod2 === "STAR voting"
                                                ? starRelativeDesc
                                                : relativeVotingMethod2 === "Ranked choice"
                                                    ? rankRelativeDesc
                                                    : relativeVotingMethod2 === "Delphi method"
                                                        ? delphiRelativeDesc
                                                        : relativeVotingMethod2 === "Quadratic voting"
                                                            ? qRelativeDesc
                                                            : null}
                                    </Text>
                                </View>
                            </View>
                        </View></>)
                }
                </div>
                <Text style={styles.subtitle}>Summary of responses</Text>
                <Text style={styles.text}>
                    Below is a summary of all your responses.
                </Text>
                <View style={styles.hr} />

                <Text style={styles.questions}>{questionStep1}</Text>

                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}> {defineGoalText}</Text>
                </div>


                <View style={styles.hr} />

                <Text style={styles.questions}>{questionStep2}</Text>
                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}>
                        {users.map((user, index) => (
                            <Text key={index}>{user.name}</Text>
                        ))}
                    </Text>
                </div>

                <View style={styles.hr} />

                <Text style={styles.questions}>{questionStep3}</Text>
                <Text style={styles.text}>
                    Low: The decision will affect small project or team within the
                    organization
                    <strong>bold</strong>
                </Text>
                <Text style={styles.text}>
                    High: The decision will affect the broader organization or how you
                    interact with other organizations
                </Text>
                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}>{selectedOption}</Text>
                </div>
                <View style={styles.hr} />
                <Text style={styles.questions}>{questionStep4}</Text>
                <Text style={styles.text}>
                    Low: The deadline for making the decision is very soon and team
                    members are unable to attend decision-making meetings
                </Text>
                <Text style={styles.text}>
                    High: The deadline for making the decision is further out and team
                    members have time to attend decision-making meetings
                </Text>
                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}>{selectedOptionCapacity}</Text>
                </div>
                <View style={styles.hr} />

                <Text style={styles.questions}>{questionStep5}</Text>
                <Text style={styles.text}>
                    Iterative Decision: An ongoing decision that needs to be updated
                    on a regular schedule
                </Text>
                <Text style={styles.text}>
                    Single Decision: A one-time decision which does not need further
                    review
                </Text>
                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}>{selectedOptionDecision}</Text>
                </div>
                <View style={styles.hr} />

                <Text style={styles.questions}>{questionStep6}</Text>
                <Text style={styles.text}>
                    Explicit: Information that lets you assign numerical values to the
                    factors being considered
                </Text>
                <Text style={styles.text}>
                    Relative: Information that lets you compare factors being
                    considered in relation to one another
                </Text>
                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}>{selectedOptionTypeOfInformation}</Text>
                </div>

                <View style={styles.hr} />

                <Text style={styles.questions}>{questionStep7}</Text>
                <Text style={styles.text}>
                    High: Example: You have enough information to rank all of the
                    options from highest to lowest preference OR score every option
                    from 1-100.
                </Text>
                <Text style={styles.text}>
                    Medium: Example: You have enough information to score every option
                    from 1-5.
                </Text>
                <Text style={styles.text}>
                    Low: Example: You have enough information to answer yes or no to
                    each option OR pick one favorite option.
                </Text>
                <div style={styles.displayOfResponses}>
                    <Text style={styles.responses}>Your response: </Text>
                    <Text style={styles.textResponse}>{selectedOptionAmountOfInformation}</Text>
                </div>
                <View style={styles.hr} />
                <Text style={styles.header}>
                    Voting Methods Table
                </Text>
                <Text style={styles.text}>You can consult the full list of voting methods below.</Text>


                <Text style={styles.subtitle}>Relative Values (Ordinal Information)</Text>
                <div>
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableTopic}>Voting Methods</Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableTopic}>
                                    Amount of Information Needed
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableTopic}>Examples</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    First past the post (Each voter selects their favorite
                                    option, and the option with the most votes wins.)
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to pick a top 1 or 2 from the
                                    list of options.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You want to select the target for your next campaign from a
                                    list of 10 options based on how they compare to each other
                                    on estimated tractability for your organization.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow1}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    Multivoting (Each voter has a certain number of votes to
                                    place on any of the options.)
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to pick a top 5 from the list
                                    of options.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    {" "}
                                    You want to select 5 research topics to pursue this year
                                    based on how motivated research staff are to investigate the
                                    topics.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    STAR voting (Voters score the options, and the one the
                                    majority prefers wins.)
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to score the options, and the
                                    one the majority prefers wins.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You want to select 5 research topics to pursue this year
                                    based on how motivated research staff are to investigate the
                                    topics.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow1}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    Ranked choice (Voters rank options based on preference, then
                                    a winner is chosen based on majority of first preference
                                    votes.)
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to rank all of the options
                                    from highest to lowest preference.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You want to see which research topics are the most and least
                                    preferred by allowing team members to rank them all.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    Delphi method (Involves multiple anonymous surveys followed
                                    by discussions about the aggregate survey results until a
                                    decision has been reached.)
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to score each option
                                    individually according to an external, objective metric.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You are making a very important decision, you have a long
                                    time frame and high team capacity, you would like to reach a
                                    consensus, and anonymity among voters is important.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow1}>
                            <View style={styles.tableCol21Bottom}>
                                <Text style={styles.tableCell2}>
                                    Quadratic voting (Voters use credits on any option, but the
                                    marginal cost of adding an additional credit to an option is
                                    higher than adding the last credit.)
                                </Text>
                            </View>
                            <View style={styles.tableCol22Bottom}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to understand subtle
                                    differences between options so they can express a higher
                                    preference for a select few options over many others.
                                </Text>
                            </View>
                            <View style={styles.tableCol23Bottom}>
                                <Text style={styles.tableCell2}>
                                    You would like to capture more details about voter
                                    preferences. You want to allow team members to vote multiple
                                    times for the same option if they feel strongly about it.
                                </Text>
                            </View>
                        </View>
                    </View>
                </div>
                <Text style={styles.subtitle}>Explicit Values (Cardinal Information)</Text>
                <div>
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableTopic}>Voting Methods</Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableTopic}>
                                    Amount of Information Needed
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableTopic}>Examples</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    Approval voting (Voters choose &quot;Yes&quot; or
                                    &quot;No&quot; for each option, and the option with the most
                                    &quot;Yes&quot; votes wins).
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to answer yes or no to each
                                    option.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You want to narrow down a list of 100 research topics based
                                    on if they meet a certain set of criteria.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow1}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    Score voting (Voters give each option a score on some
                                    objective metric, and the option with the highest score
                                    wins).
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to score each option from 1-5
                                    (less information). Enough information for voters to score
                                    each option from 1-100 (more information).
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You want to select 5 research topics to pursue this year
                                    from a list of 50 options. Your metric is: &quot;How many
                                    studies have already been published about this topic?&quot;
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol21}>
                                <Text style={styles.tableCell2}>
                                    Delphi method (Involves multiple anonymous surveys followed
                                    by discussions about the aggregate survey results until a
                                    decision has been reached).
                                </Text>
                            </View>
                            <View style={styles.tableCol22}>
                                <Text style={styles.tableCell2}>
                                    Enough information for voters to score each option
                                    individually according to an external, objective metric.
                                </Text>
                            </View>
                            <View style={styles.tableCol23}>
                                <Text style={styles.tableCell2}>
                                    You are making a very important decision, you have a long
                                    time frame and high team capacity, you would like to reach a
                                    consensus, and anonymity among voters is important.
                                </Text>
                            </View>
                        </View>
                    </View>
                </div>

                <Text style={styles.subtitle}>Feedback Form</Text>

                <Text style={styles.text}>Please fill out this <Link src="https://docs.google.com/forms/d/e/1FAIpQLSehZTvcZNcI7qxLhxaopufBTRgn0dqI33n8saSZpslQAWgBug/viewform">feedback form</Link>  to share your thoughts about the decision-making framework.
                    Your feedback will be taken into account in future iterations of this framework. Thank you!</Text>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </div >
    );
}