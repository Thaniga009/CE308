import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const LIKES = [
  { id: "1", title: "พัฒนาแอปพลิเคชันมือถือด้วย React native" },
  { id: "2", title: "เขียนโปรแกรมภาษา JavaScript,TypeScript" },
  { id: "3", title: "ศึกษาเกี่ยวกับ Machine Learning และ AI" },
  { id: "4", title: "เล่นเกมส์ Shawarma" },
  { id: "5", title: "บ้าเกาหลี" },
  { id: "6", title: "ดูรายการล่าท้าผี" },
  { id: "7", title: "รับรู้เรื่องของคนอื่น" },
  { id: "8", title: "นอนอ่านการ์ตูน" },
];

const DISLIKES = [
  { id: "1", title: "โค้ดที่ไม่มี Comment และยากต่อการอ่าน" },
  { id: "2", title: "Bug ที่เจอก่อน Deadline" },
  { id: "3", title: "ระบบที่ช้าและค้าง" },
  { id: "4", title: "Error message เข้าใจยาก" },
  { id: "5", title: "ระบบมีหลายไฟล์หลายโฟลเดอร์ทำให้งง" },
  { id: "6", title: "ต้องจำคำสั่งหรือ syntax เยอะ" },
  { id: "7", title: "ระบบพึ่งพาเครื่องมือหลายอย่าง" },
  { id: "8", title: "ผัก ทุกชนิดบนโลก" },
  { id: "9", title: "สัตว์เลื้อยคลาน" },
  { id: "9", title: "หน้าร้อน" },
];

const App = () => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <View style={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const infoList = [
    "ชื่อ: ฐานิกา เท่าไม้สม",
    "ชื่อเล่น: ออม",
    "อีเมล: th4nigaaom@gmail.com",
  ];

  const infoStudy = [
    "ระดับอุดมศึกษา:มหาวิทยาลัยธุรกิจบัณฑิตย์",
    "สาขา:คอมพิวเตอร์ชั้นปี3",
  ];

  const infoAddress = [
    "4/166 หมู่บ้านทรัพย์วัฒนะ ซอยแจ้งวัฒนะ17 ต.บางพูด อ.ปากเกร็ด จ.นนทบุรี 11120",
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: "#87CEFA" }]}>
          <Text style={styles.boxText}>รหัส{"\n"}66112096</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#87CEFA" }]}>
          <Text style={styles.boxText}>คณะ {"\n"} วิศวะ </Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#87CEFA" }]}>
          <Text style={styles.boxText}>สาขา {"\n"} คอมพิวเตอร์</Text>
        </View>
      </View>

      <View style={styles.Contentsection}>
        <Text style={styles.title}>ข้อมูลส่วนตัว:</Text>

        {infoList.map((text, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.Contentsection}>
        <Text style={styles.title}>การศึกษา:</Text>

        {infoStudy.map((text, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.Contentsection}>
        <Text style={styles.title}>ที่อยู่:</Text>

        {infoAddress.map((text, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.Contentsection}>
        <FlatList
          data={LIKES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ListHeaderComponent={
            <Text style={styles.headerFlatList}>สิ่งที่ชอบ</Text>
          }
        />

        <FlatList
          data={DISLIKES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ListHeaderComponent={
            <Text style={styles.headerFlatList}>สิ่งที่ไม่ชอบ</Text>
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    height: 100,
    backgroundColor: "#FFCCFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "blach",
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  boxText: {
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  Contentsection: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    //ขอบข้าง
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#DDA0DD",
  },
  contentSectionFlatList: {
    marginTop: 20,
  },
  headerFlatList: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#FFCCFF",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#000202",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "blue",
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default App;
