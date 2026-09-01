__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 79
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 93
                  },
                  "optional": false,
                  "computed": false,
                  "start": 73,
                  "end": 93
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 128,
                                "end": 132
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "ObjectExpression",
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "kind": "init",
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "then",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 162,
                                              "end": 166
                                            },
                                            "value": {
                                              "type": "FunctionExpression",
                                              "id": null,
                                              "generator": false,
                                              "async": false,
                                              "declare": false,
                                              "typeParameters": null,
                                              "params": [],
                                              "returnType": null,
                                              "body": {
                                                "type": "BlockStatement",
                                                "body": [],
                                                "start": 169,
                                                "end": 172
                                              },
                                              "expression": false,
                                              "start": 166,
                                              "end": 172
                                            },
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "optional": false,
                                            "start": 162,
                                            "end": 172
                                          }
                                        ],
                                        "start": 160,
                                        "end": 174
                                      },
                                      "start": 153,
                                      "end": 175
                                    }
                                  ],
                                  "start": 135,
                                  "end": 189
                                },
                                "expression": false,
                                "start": 132,
                                "end": 189
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 128,
                              "end": 189
                            }
                          ],
                          "start": 114,
                          "end": 199
                        },
                        "start": 107,
                        "end": 200
                      }
                    ],
                    "start": 97,
                    "end": 206
                  },
                  "expression": false,
                  "start": 94,
                  "end": 206
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 72,
                "end": 206
              }
            ],
            "start": 66,
            "end": 208
          },
          "definite": false,
          "start": 60,
          "end": 208
        }
      ],
      "declare": false,
      "start": 56,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 228
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 247
              },
              "start": 237,
              "end": 247
            },
            "directive": null,
            "start": 237,
            "end": 248
          }
        ],
        "start": 231,
        "end": 250
      },
      "expression": false,
      "start": 211,
      "end": 250
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 250
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "asyncIterator",
    "start": 80,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 211,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 217,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  }
]
```
