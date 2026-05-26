import { StatusBar } from 'expo-status-bar';
import './global.css';

import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const highlights = [
  'Expo SDK 56',
  'TypeScript strict mode',
  'NativeWind + Tailwind CSS',
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <ScrollView
        className="flex-1"
        contentContainerClassName="min-h-full justify-center px-6 py-10"
      >
        <View className="gap-8">
          <View className="gap-4">
            <Text className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Chexplained mobile
            </Text>
            <Text className="text-4xl font-bold text-white">
              React Native is ready for product work.
            </Text>
            <Text className="text-base leading-7 text-slate-300">
              This starter app uses Expo, TypeScript, and Tailwind utilities
              through NativeWind.
            </Text>
          </View>

          <View className="gap-3">
            {highlights.map((label) => (
              <View
                key={label}
                className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
              >
                <Text className="text-base font-medium text-slate-100">
                  {label}
                </Text>
              </View>
            ))}
          </View>

          <View className="rounded-lg bg-cyan-400 px-5 py-4">
            <Text className="text-center text-base font-bold text-slate-950">
              Start building in mobileapp/App.tsx
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
