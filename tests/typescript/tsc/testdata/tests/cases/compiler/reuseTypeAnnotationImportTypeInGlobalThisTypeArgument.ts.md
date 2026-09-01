__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handleParamGovernance",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 37
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "zcf",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "start": 41,
              "end": 46
            },
            "start": 38,
            "end": 46
          }
        ],
        "returnType": {
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
                  "name": "publicMixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 64
                },
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
                          "name": "getGovernedParams",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 89
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "globalThis",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 97,
                                    "end": 107
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ERef",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 108,
                                    "end": 112
                                  },
                                  "start": 97,
                                  "end": 112
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSImportType",
                                      "source": {
                                        "type": "Literal",
                                        "value": "./types.js",
                                        "raw": "\"./types.js\"",
                                        "start": 120,
                                        "end": 132
                                      },
                                      "options": null,
                                      "qualifier": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ParamStateRecord",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 134,
                                        "end": 150
                                      },
                                      "typeArguments": null,
                                      "start": 113,
                                      "end": 150
                                    }
                                  ],
                                  "start": 112,
                                  "end": 151
                                },
                                "start": 97,
                                "end": 151
                              },
                              "start": 94,
                              "end": 151
                            },
                            "start": 91,
                            "end": 151
                          },
                          "start": 89,
                          "end": 151
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 72,
                        "end": 152
                      }
                    ],
                    "start": 66,
                    "end": 156
                  },
                  "start": 64,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 53,
                "end": 157
              }
            ],
            "start": 49,
            "end": 159
          },
          "start": 47,
          "end": 159
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "handleParamGovernance",
    "start": 16,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "zcf",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "publicMixin",
    "start": 53,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "getGovernedParams",
    "start": 72,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "globalThis",
    "start": 97,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "ERef",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "String",
    "value": "\"./types.js\"",
    "start": 120,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "ParamStateRecord",
    "start": 134,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  }
]
```
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
        "name": "_ERef",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "typeArguments": null,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "typeArguments": null,
                  "start": 28,
                  "end": 29
                }
              ],
              "start": 27,
              "end": 30
            },
            "start": 20,
            "end": 30
          }
        ],
        "start": 16,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParamStateRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ParamStateRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 78
          },
          "importKind": "value",
          "start": 41,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types.js",
        "raw": "'./types.js'",
        "start": 86,
        "end": 98
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 99
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 114
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_ERef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 160
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ERef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 168
                },
                "exportKind": "value",
                "start": 155,
                "end": 168
              },
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 191
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 211
                },
                "exportKind": "value",
                "start": 174,
                "end": 211
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 142,
            "end": 217
          }
        ],
        "start": 115,
        "end": 219
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 100,
      "end": 219
    }
  ],
  "sourceType": "module",
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
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "_ERef",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "ParamStateRecord",
    "start": 41,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "_ParamStateRecord",
    "start": 61,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 81,
    "end": 85
  },
  {
    "type": "String",
    "value": "'./types.js'",
    "start": 86,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "_ERef",
    "start": 155,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "ERef",
    "start": 164,
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
    "value": "_ParamStateRecord",
    "start": 174,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 192,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "ParamStateRecord",
    "start": 195,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "handleParamGovernance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 30
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "handleParamGovernance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 30
          },
          "importKind": "value",
          "start": 9,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./contractHelper.js",
        "raw": "'./contractHelper.js'",
        "start": 38,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 60
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
              "name": "blah",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "handleParamGovernance",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 102
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 103,
                  "end": 105
                }
              ],
              "optional": false,
              "start": 81,
              "end": 106
            },
            "definite": false,
            "start": 74,
            "end": 106
          }
        ],
        "declare": false,
        "start": 68,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "handleParamGovernance",
    "start": 9,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 33,
    "end": 37
  },
  {
    "type": "String",
    "value": "'./contractHelper.js'",
    "start": 38,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 61,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "handleParamGovernance",
    "start": 81,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  }
]
```
