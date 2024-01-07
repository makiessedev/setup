import { ScrollView, Text, View } from "react-native";

import { generateRangeDatesFromYearStart } from "../utils/generateRangeDatesFromYearStart";

import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length

export function Home()
{
  return (
    <View className="flex-1 px-8 pt-16 bg-background">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {
          WEEK_DAYS.map((week_day, index) => (
            <Text 
              key={week_day + index}
              className="text-zinc-400 text-xl font-inter-bold text-center mx-1"
              style={{width: DAY_SIZE}}
            >
              {week_day}
            </Text>
          ))
        }
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map((date) => (
              <HabitDay key={date.toISOString()} />
            ))
          }
          {
            amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View 
                key={index}
                className="bg-zinc-900 m-1 rounded-lg border-2 border-zinc-800 opacity-40"
                style={{width: DAY_SIZE, height: DAY_SIZE}}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
}