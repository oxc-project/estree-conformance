__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "start": 13,
                        "end": 14
                      },
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
                      "accessibility": null,
                      "static": false,
                      "start": 13,
                      "end": 23
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
                        "start": 24,
                        "end": 25
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 27,
                          "end": 33
                        },
                        "start": 25,
                        "end": 33
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 24,
                      "end": 33
                    }
                  ],
                  "start": 11,
                  "end": 35
                },
                "start": 11,
                "end": 37
              },
              "start": 9,
              "end": 37
            },
            "start": 4,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 50,
                    "end": 51
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 50,
                  "end": 51
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 62
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 53,
                  "end": 62
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 64
            },
            "init": null,
            "definite": false,
            "start": 48,
            "end": 64
          }
        ],
        "declare": false,
        "start": 44,
        "end": 64
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 73
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 83
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 91
                }
              ],
              "start": 81,
              "end": 92
            },
            "directive": null,
            "start": 81,
            "end": 93
          }
        ],
        "start": 75,
        "end": 95
      },
      "start": 39,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              },
              "start": 102,
              "end": 110
            },
            "start": 100,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 110
        }
      ],
      "declare": false,
      "start": 96,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rrestOff",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 131,
                        "end": 137
                      },
                      "start": 129,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 128,
                    "end": 137
                  }
                ],
                "start": 126,
                "end": 139
              },
              "start": 124,
              "end": 139
            },
            "start": 116,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 139
        }
      ],
      "declare": false,
      "start": 112,
      "end": 140
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "decorators": [],
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
              "start": 148,
              "end": 149
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 153
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 148,
            "end": 153
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rrestOff",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 166
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 155,
            "end": 166
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 168
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 177
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 189
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rrestOff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 199
                }
              ],
              "start": 186,
              "end": 200
            },
            "directive": null,
            "start": 186,
            "end": 201
          }
        ],
        "start": 180,
        "end": 203
      },
      "start": 141,
      "end": 203
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "norest",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 221
            },
            "init": null,
            "definite": false,
            "start": 215,
            "end": 221
          }
        ],
        "declare": false,
        "start": 209,
        "end": 221
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 230
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 234
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 234
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 247
                  },
                  "start": 243,
                  "end": 247
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 250
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a string",
                    "raw": "'a string'",
                    "start": 252,
                    "end": 262
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 249,
                  "end": 262
                }
              ],
              "start": 241,
              "end": 264
            },
            "id": null,
            "generator": false,
            "start": 235,
            "end": 265
          }
        ],
        "optional": false,
        "start": 225,
        "end": 266
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "norest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 281
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 283
                  },
                  "optional": false,
                  "computed": false,
                  "start": 275,
                  "end": 283
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "norest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 291
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 293
                  },
                  "optional": false,
                  "computed": false,
                  "start": 285,
                  "end": 293
                }
              ],
              "start": 274,
              "end": 294
            },
            "directive": null,
            "start": 274,
            "end": 295
          }
        ],
        "start": 268,
        "end": 338
      },
      "start": 204,
      "end": 338
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 338
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
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
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "restOf",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "restOf",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
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
    "value": "let",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "rrestOff",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "rrestOff",
    "start": 158,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 169,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "rrestOff",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "norest",
    "start": 215,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 252,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "norest",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "norest",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  }
]
```
