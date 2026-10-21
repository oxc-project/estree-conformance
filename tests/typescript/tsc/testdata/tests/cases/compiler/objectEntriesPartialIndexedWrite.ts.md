__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Row",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "name": "amount",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 19
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 21,
                    "end": 27
                  },
                  "start": 19,
                  "end": 27
                },
                "accessibility": null,
                "static": false,
                "start": 13,
                "end": 27
              }
            ],
            "start": 11,
            "end": 29
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 38
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                },
                {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                }
              ],
              "start": 38,
              "end": 54
            },
            "start": 32,
            "end": 54
          }
        ],
        "start": 11,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "copy",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 76
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "row",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Row",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 85
                },
                "typeArguments": null,
                "start": 82,
                "end": 85
              },
              "start": 80,
              "end": 85
            },
            "start": 77,
            "end": 85
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mapping",
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
                      "name": "amount",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 104
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 106,
                        "end": 112
                      },
                      "start": 104,
                      "end": 112
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 98,
                    "end": 113
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 119
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 114,
                    "end": 127
                  }
                ],
                "start": 96,
                "end": 129
              },
              "start": 94,
              "end": 129
            },
            "start": 87,
            "end": 129
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 158
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Row",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 159,
                                "end": 162
                              },
                              "typeArguments": null,
                              "start": 159,
                              "end": 162
                            }
                          ],
                          "start": 158,
                          "end": 163
                        },
                        "start": 151,
                        "end": 163
                      },
                      "start": 149,
                      "end": 163
                    },
                    "start": 143,
                    "end": 163
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 166,
                    "end": 168
                  },
                  "definite": false,
                  "start": 143,
                  "end": 168
                }
              ],
              "declare": false,
              "start": 137,
              "end": 169
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
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 191
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 199
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 200
                    },
                    "init": null,
                    "definite": false,
                    "start": 185,
                    "end": 200
                  }
                ],
                "declare": false,
                "start": 179,
                "end": 200
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 210
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entries",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 218
                  },
                  "optional": false,
                  "computed": false,
                  "start": 204,
                  "end": 218
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapping",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 226
                  }
                ],
                "optional": false,
                "start": 204,
                "end": 227
              },
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 245
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 251
                        },
                        "optional": false,
                        "computed": true,
                        "start": 239,
                        "end": 252
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "row",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 255,
                          "end": 258
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 259,
                          "end": 265
                        },
                        "optional": false,
                        "computed": true,
                        "start": 255,
                        "end": 266
                      },
                      "start": 239,
                      "end": 266
                    },
                    "directive": null,
                    "start": 239,
                    "end": 267
                  }
                ],
                "start": 229,
                "end": 273
              },
              "start": 174,
              "end": 273
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 291
              },
              "start": 278,
              "end": 292
            }
          ],
          "start": 131,
          "end": 294
        },
        "expression": false,
        "start": 63,
        "end": 294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 294
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 294
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "amount",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "copy",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "mapping",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "amount",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "notes",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 143,
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
    "value": "Partial",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 211,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "mapping",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  }
]
```
