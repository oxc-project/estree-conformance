__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 21,
                    "end": 22
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 24,
                        "end": 25
                      },
                      "typeArguments": null,
                      "start": 24,
                      "end": 25
                    },
                    "start": 22,
                    "end": 25
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 21,
                  "end": 26
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 28
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 30,
                        "end": 31
                      },
                      "typeArguments": null,
                      "start": 30,
                      "end": 31
                    },
                    "start": 28,
                    "end": 31
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 27,
                  "end": 31
                }
              ],
              "start": 19,
              "end": 33
            },
            "start": 17,
            "end": 33
          },
          "start": 16,
          "end": 33
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "typeArguments": null,
              "start": 38,
              "end": 39
            },
            "start": 36,
            "end": 39
          },
          "start": 35,
          "end": 39
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "start": 43,
            "end": 52
          }
        ],
        "start": 41,
        "end": 54
      },
      "expression": false,
      "start": 0,
      "end": 54
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 94
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 96,
                      "end": 97
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 93,
                    "end": 97
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 102,
                      "end": 104
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 99,
                    "end": 104
                  }
                ],
                "start": 91,
                "end": 106
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 108,
                "end": 109
              }
            ],
            "optional": false,
            "start": 87,
            "end": 110
          },
          "definite": false,
          "start": 83,
          "end": 110
        }
      ],
      "declare": false,
      "start": 79,
      "end": 111
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 118
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 125,
                  "end": 131
                }
              ],
              "start": 124,
              "end": 132
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 136
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 138,
                      "end": 139
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 135,
                    "end": 139
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 144,
                      "end": 146
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 141,
                    "end": 146
                  }
                ],
                "start": 133,
                "end": 148
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 150,
                "end": 151
              }
            ],
            "optional": false,
            "start": 121,
            "end": 152
          },
          "definite": false,
          "start": 116,
          "end": 152
        }
      ],
      "declare": false,
      "start": 112,
      "end": 153
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 167
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 168,
                  "end": 174
                }
              ],
              "start": 167,
              "end": 175
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 181,
                      "end": 182
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 178,
                    "end": 182
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 187,
                      "end": 189
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 184,
                    "end": 189
                  }
                ],
                "start": 176,
                "end": 191
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 193,
                "end": 194
              }
            ],
            "optional": false,
            "start": 164,
            "end": 195
          },
          "definite": false,
          "start": 159,
          "end": 195
        }
      ],
      "declare": false,
      "start": 155,
      "end": 196
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 204
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 210
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 211,
                  "end": 217
                }
              ],
              "start": 210,
              "end": 218
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 222
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 224,
                      "end": 226
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 221,
                    "end": 226
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 229
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 231,
                      "end": 232
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 228,
                    "end": 232
                  }
                ],
                "start": 219,
                "end": 234
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 236,
                "end": 238
              }
            ],
            "optional": false,
            "start": 207,
            "end": 239
          },
          "definite": false,
          "start": 202,
          "end": 239
        }
      ],
      "declare": false,
      "start": 198,
      "end": 240
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 253
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              ],
              "start": 253,
              "end": 261
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 265
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 267,
                      "end": 269
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 264,
                    "end": 269
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 272
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 274,
                      "end": 275
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 271,
                    "end": 275
                  }
                ],
                "start": 262,
                "end": 277
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 279,
                "end": 281
              }
            ],
            "optional": false,
            "start": 250,
            "end": 282
          },
          "definite": false,
          "start": 245,
          "end": 282
        }
      ],
      "declare": false,
      "start": 241,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
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
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 236,
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
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  }
]
```
