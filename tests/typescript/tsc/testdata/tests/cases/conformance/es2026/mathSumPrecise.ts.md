__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arraySum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 16,
                "end": 22
              },
              "start": 14,
              "end": 22
            },
            "start": 6,
            "end": 22
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 29
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sumPrecise",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 40
              },
              "optional": false,
              "computed": false,
              "start": 25,
              "end": 40
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 42,
                    "end": 43
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 45,
                    "end": 46
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 48,
                    "end": 49
                  }
                ],
                "start": 41,
                "end": 50
              }
            ],
            "optional": false,
            "start": 25,
            "end": 51
          },
          "definite": false,
          "start": 6,
          "end": 51
        }
      ],
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "setSum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "start": 59,
            "end": 73
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 80
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sumPrecise",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 91
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 91
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 99
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0.1,
                        "raw": "0.1",
                        "start": 101,
                        "end": 104
                      },
                      {
                        "type": "Literal",
                        "value": 0.2,
                        "raw": "0.2",
                        "start": 106,
                        "end": 109
                      }
                    ],
                    "start": 100,
                    "end": 110
                  }
                ],
                "start": 92,
                "end": 111
              }
            ],
            "optional": false,
            "start": 76,
            "end": 112
          },
          "definite": false,
          "start": 59,
          "end": 112
        }
      ],
      "declare": false,
      "start": 53,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 132
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 145
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              },
              {
                "type": "TSVoidKeyword",
                "start": 154,
                "end": 158
              },
              {
                "type": "TSUnknownKeyword",
                "start": 160,
                "end": 167
              }
            ],
            "start": 145,
            "end": 168
          },
          "start": 136,
          "end": 168
        },
        "start": 134,
        "end": 168
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 181,
                "end": 182
              },
              "start": 175,
              "end": 182
            },
            "directive": null,
            "start": 175,
            "end": 183
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 194,
                "end": 195
              },
              "start": 188,
              "end": 195
            },
            "directive": null,
            "start": 188,
            "end": 196
          }
        ],
        "start": 169,
        "end": 198
      },
      "expression": false,
      "start": 115,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "generatorSum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "start": 206,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 233
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sumPrecise",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 244
              },
              "optional": false,
              "computed": false,
              "start": 229,
              "end": 244
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numbers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 252
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 245,
                "end": 254
              }
            ],
            "optional": false,
            "start": 229,
            "end": 255
          },
          "definite": false,
          "start": 206,
          "end": 255
        }
      ],
      "declare": false,
      "start": 200,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sumPrecise",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 273
          },
          "optional": false,
          "computed": false,
          "start": 258,
          "end": 273
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 275,
                "end": 277
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "2n",
                "bigint": "2",
                "start": 279,
                "end": 281
              }
            ],
            "start": 274,
            "end": 282
          }
        ],
        "optional": false,
        "start": 258,
        "end": 283
      },
      "directive": null,
      "start": 258,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 284
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "arraySum",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "sumPrecise",
    "start": 30,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "setSum",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "sumPrecise",
    "start": 81,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "0.1",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "0.2",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 125,
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
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "yield",
    "start": 175,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 188,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "generatorSum",
    "start": 206,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "sumPrecise",
    "start": 234,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "sumPrecise",
    "start": 263,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  }
]
```
