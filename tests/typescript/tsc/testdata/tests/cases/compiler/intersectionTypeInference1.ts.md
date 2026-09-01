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
        "name": "alert",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 35
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "start": 36,
          "end": 45
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 47,
        "end": 49
      },
      "expression": false,
      "start": 21,
      "end": 49
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
            "name": "parameterFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 68
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
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
                          "name": "store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 84
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          },
                          "start": 84,
                          "end": 91
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 79,
                        "end": 91
                      }
                    ],
                    "start": 78,
                    "end": 92
                  },
                  "start": 77,
                  "end": 92
                },
                "start": 72,
                "end": 92
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "alert",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 108
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 114
                  },
                  "optional": false,
                  "computed": false,
                  "start": 103,
                  "end": 114
                }
              ],
              "optional": false,
              "start": 97,
              "end": 115
            },
            "id": null,
            "generator": false,
            "start": 71,
            "end": 115
          },
          "definite": false,
          "start": 57,
          "end": 115
        }
      ],
      "declare": false,
      "start": 51,
      "end": 115
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
            "name": "brokenFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 136
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OwnProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 148
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 140,
                  "end": 148
                }
              ],
              "start": 139,
              "end": 149
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
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
                                      "name": "dispatch",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 158,
                                      "end": 166
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 168,
                                        "end": 174
                                      },
                                      "start": 166,
                                      "end": 174
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 158,
                                    "end": 174
                                  }
                                ],
                                "start": 157,
                                "end": 175
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OwnProps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 186
                                },
                                "typeArguments": null,
                                "start": 178,
                                "end": 186
                              }
                            ],
                            "start": 157,
                            "end": 186
                          },
                          "start": 155,
                          "end": 186
                        },
                        "start": 154,
                        "end": 186
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 191,
                        "end": 195
                      },
                      "start": 188,
                      "end": 195
                    },
                    "start": 153,
                    "end": 195
                  },
                  "start": 151,
                  "end": 195
                },
                "start": 150,
                "end": 195
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 204,
                      "end": 212
                    },
                    "start": 202,
                    "end": 212
                  },
                  "start": 201,
                  "end": 212
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 218
              },
              "id": null,
              "generator": false,
              "start": 200,
              "end": 218
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 218
          },
          "definite": false,
          "start": 122,
          "end": 218
        }
      ],
      "declare": false,
      "start": 116,
      "end": 218
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Form3",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 237
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "brokenFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 254
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parameterFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 266
                  }
                ],
                "optional": false,
                "start": 240,
                "end": 267
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
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 274
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 276,
                        "end": 283
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 269,
                      "end": 283
                    }
                  ],
                  "start": 268,
                  "end": 284
                }
              ],
              "optional": false,
              "start": 240,
              "end": 285
            },
            "definite": false,
            "start": 232,
            "end": 285
          }
        ],
        "declare": false,
        "start": 226,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 219,
      "end": 285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 285
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "alert",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "parameterFn",
    "start": 57,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "store",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 94,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "alert",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "store",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "brokenFunction",
    "start": 122,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "OwnProps",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "dispatch",
    "start": 158,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "OwnProps",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 188,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "OwnProps",
    "start": 204,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 214,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Form3",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "brokenFunction",
    "start": 240,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "parameterFn",
    "start": 255,
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
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "store",
    "start": 269,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  }
]
```
