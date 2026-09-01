__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 23,
              "end": 24
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 39
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 40,
                    "end": 46
                  },
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 54
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 56,
                            "end": 63
                          },
                          "start": 54,
                          "end": 63
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 50,
                        "end": 63
                      }
                    ],
                    "start": 48,
                    "end": 65
                  }
                ],
                "start": 39,
                "end": 66
              },
              "start": 33,
              "end": 66
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 66
          }
        ],
        "start": 22,
        "end": 67
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 90
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 90
                },
                "start": 83,
                "end": 90
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 93,
                  "end": 94
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeArguments": null,
                  "start": 95,
                  "end": 96
                },
                "start": 93,
                "end": 97
              },
              "optional": false,
              "readonly": null,
              "start": 73,
              "end": 100
            },
            "start": 71,
            "end": 100
          },
          "start": 68,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "typeArguments": null,
          "start": 103,
          "end": 104
        },
        "start": 101,
        "end": 104
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 105
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
            "name": "res1",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 117
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 125
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 133
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 145
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 147,
                            "end": 148
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 141,
                          "end": 148
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 159
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 161,
                            "end": 163
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 154,
                          "end": 163
                        }
                      ],
                      "start": 135,
                      "end": 168
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 130,
                    "end": 168
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 175
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 187
                          },
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 189,
                            "end": 193
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 183,
                          "end": 193
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 199,
                            "end": 204
                          },
                          "value": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 206,
                            "end": 210
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 199,
                          "end": 210
                        }
                      ],
                      "start": 177,
                      "end": 215
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 172,
                    "end": 215
                  }
                ],
                "start": 126,
                "end": 218
              }
            ],
            "optional": false,
            "start": 120,
            "end": 219
          },
          "definite": false,
          "start": 113,
          "end": 219
        }
      ],
      "declare": false,
      "start": 107,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 25,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
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
    "value": "prop",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
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
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "res1",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "prop",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "prop2",
    "start": 154,
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
    "value": "\"\"",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Null",
    "value": "null",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  }
]
```
