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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 20
                },
                "typeArguments": null,
                "start": 15,
                "end": 20
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 27
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 29,
                      "end": 34
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 23,
                    "end": 34
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 43
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 45,
                      "end": 50
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 36,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 14,
              "end": 52
            },
            "id": null,
            "generator": false,
            "start": 8,
            "end": 52
          },
          "definite": false,
          "start": 4,
          "end": 52
        }
      ],
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 82
                },
                "typeArguments": null,
                "start": 77,
                "end": 82
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 89
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 91,
                      "end": 96
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 85,
                    "end": 96
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 105
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 107,
                      "end": 112
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 98,
                    "end": 112
                  }
                ],
                "start": 83,
                "end": 114
              },
              "start": 76,
              "end": 114
            },
            "id": null,
            "generator": false,
            "start": 69,
            "end": 115
          },
          "definite": false,
          "start": 65,
          "end": 115
        }
      ],
      "declare": false,
      "start": 61,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 143
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 145,
                    "end": 150
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 139,
                  "end": 150
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 159
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 161,
                    "end": 166
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 152,
                  "end": 166
                }
              ],
              "start": 137,
              "end": 168
            },
            "id": null,
            "generator": false,
            "start": 130,
            "end": 169
          },
          "definite": false,
          "start": 126,
          "end": 169
        }
      ],
      "declare": false,
      "start": 122,
      "end": 170
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 205
                },
                "typeArguments": null,
                "start": 200,
                "end": 205
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 213
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 215,
                      "end": 220
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 209,
                    "end": 220
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 229
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 231,
                      "end": 236
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 222,
                    "end": 236
                  }
                ],
                "start": 207,
                "end": 238
              },
              "start": 199,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 191,
            "end": 241
          },
          "definite": false,
          "start": 187,
          "end": 241
        }
      ],
      "declare": false,
      "start": 183,
      "end": 242
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 242
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 11,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 152,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  }
]
```
