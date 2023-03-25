import React from "react";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
        flexDirection: "flex",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 24,
        textAlign: "center",
        marginTop: "40px",
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: "Oswald",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },

    table: {
        marginTop: "30px",
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    tableCol1: {
        width: "20%",
        height:"60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    tableCol2: {
        width: "65%",
        height: "60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    tableCell: {
        margin: "auto",
        fontSize: 10,
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
});

export default function Pdf(props) {
    const { selectedOptionAmountOfInformation } = props;
    const { selectedOption } = props;
    const { selectedOptionTypeOfInformation } = props;
    const { selectedOptionDecision }= props;
    const { selectedOptionCapacity }= props;
    const { defineGoalText } = props;
    const { users } = props;
    return (
        <div>
            <Page style={styles.page}>
                <Text style={styles.header} fixed>
                    Your responses are below.
                </Text>
                <div style={styles.body}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableTopic}>Voting Method</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableTopic}>Value</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>What</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{defineGoalText}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Who</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                {users.map((user) => (
                                    <Text style={styles.tableCell}> {user.name} </Text>))}
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Importance</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOption}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Capacity</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionCapacity}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Time and Resource</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}> </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Type of Decision</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionDecision}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Type of Information</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionTypeOfInformation} </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>Amount of Information</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>{selectedOptionAmountOfInformation}</Text>
                            </View>
                        </View>
                    </View>
                </div>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>

        </div>

    );
}



            //   <View style={styles.section}>
            //       <Text>Section #1</Text>
            //   </View>
            //   <View style={styles.section}>
            //       <Text>Section #2</Text>
            //   </View>
            //   <Text style={styles.header} fixed>
            //       ~ Created with react-pdf ~
            //   </Text>
            //   <Text style={styles.title}>Don Quijote de la Mancha</Text>
            //   <Text style={styles.author}>Miguel de Cervantes</Text>
            //   <Text style={styles.text}>
            //       En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            //       mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
            //       antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
            //       carnero, salpicón las más noches, duelos y quebrantos los sábados,
            //       lentejas los viernes, algún palomino de añadidura los domingos,
            //       consumían las tres partes de su hacienda. El resto della concluían sayo
            //       de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
            //       mismo, los días de entre semana se honraba con su vellori de lo más
            //       fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
            //       que no llegaba a los veinte, y un mozo de campo y plaza, que así
            //       ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
            //       hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
            //       enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
            //       tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
            //       diferencia en los autores que deste caso escriben), aunque por
            //       conjeturas verosímiles se deja entender que se llama Quijana; pero esto
            //       importa poco a nuestro cuento; basta que en la narración dél no se salga
            //       un punto de la verdad
            //   </Text>
            //   <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            //       `${pageNumber} / ${totalPages}`
            //   )} fixed />