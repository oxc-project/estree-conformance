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
        "start": 25,
        "end": 28
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
              "start": 29,
              "end": 30
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 45
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 46,
                        "end": 52
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "start": 55,
                        "end": 61
                      }
                    ],
                    "start": 46,
                    "end": 61
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  }
                ],
                "start": 45,
                "end": 67
              },
              "start": 39,
              "end": 67
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 67
          }
        ],
        "start": 28,
        "end": 68
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 75,
            "end": 78
          },
          "start": 69,
          "end": 78
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 83,
                  "end": 89
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 92,
                  "end": 98
                }
              ],
              "start": 83,
              "end": 98
            },
            "start": 81,
            "end": 98
          },
          "start": 80,
          "end": 98
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "optional": false,
                "computed": true,
                "start": 106,
                "end": 115
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 118,
                "end": 120
              },
              "start": 106,
              "end": 120
            },
            "directive": null,
            "start": 106,
            "end": 121
          }
        ],
        "start": 100,
        "end": 132
      },
      "expression": false,
      "start": 16,
      "end": 132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 147
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
              "start": 148,
              "end": 149
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 158,
                    "end": 164
                  },
                  "start": 158,
                  "end": 166
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 175,
                              "end": 181
                            },
                            "start": 173,
                            "end": 181
                          },
                          "start": 172,
                          "end": 181
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 193,
                              "end": 199
                            }
                          ],
                          "start": 184,
                          "end": 199
                        },
                        "start": 182,
                        "end": 199
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 171,
                      "end": 199
                    }
                  ],
                  "start": 169,
                  "end": 201
                }
              ],
              "start": 158,
              "end": 201
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 201
          }
        ],
        "start": 147,
        "end": 202
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 211,
                "end": 212
              },
              "typeArguments": null,
              "start": 211,
              "end": 212
            },
            "start": 209,
            "end": 212
          },
          "start": 203,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 217,
                  "end": 223
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 226,
                  "end": 232
                }
              ],
              "start": 217,
              "end": 232
            },
            "start": 215,
            "end": 232
          },
          "start": 214,
          "end": 232
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 246
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "optional": false,
                "computed": true,
                "start": 240,
                "end": 249
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 252,
                "end": 253
              },
              "start": 240,
              "end": 253
            },
            "directive": null,
            "start": 240,
            "end": 254
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 274
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 275,
                  "end": 276
                },
                "optional": false,
                "computed": true,
                "start": 268,
                "end": 277
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 280,
                "end": 281
              },
              "start": 268,
              "end": 281
            },
            "directive": null,
            "start": 268,
            "end": 282
          }
        ],
        "start": 234,
        "end": 290
      },
      "expression": false,
      "start": 134,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 290
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 16,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 31,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 134,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 150,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 268,
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
    "value": "1",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  }
]
```
