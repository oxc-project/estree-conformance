__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Whatever",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 20
        },
        "typeParameters": null,
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
              "end": 34
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
                "start": 35,
                "end": 36
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 38,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "accessibility": null,
              "static": false,
              "start": 35,
              "end": 44
            }
          ],
          "start": 23,
          "end": 45
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 64
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
                "start": 65,
                "end": 66
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 65,
              "end": 66
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 74
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 85
                },
                "typeArguments": null,
                "start": 77,
                "end": 85
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 68,
              "end": 85
            }
          ],
          "start": 64,
          "end": 86
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 94,
                    "end": 100
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "y",
                      "raw": "\"y\"",
                      "start": 102,
                      "end": 105
                    },
                    "start": 102,
                    "end": 105
                  }
                ],
                "start": 93,
                "end": 106
              },
              "start": 89,
              "end": 106
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 116
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 117,
                    "end": 123
                  }
                ],
                "start": 116,
                "end": 124
              },
              "start": 109,
              "end": 124
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            }
          ],
          "start": 89,
          "end": 128
        },
        "declare": false,
        "start": 54,
        "end": 129
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 130
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Whatever",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "TThing",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Whatever",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "TThing",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "TThing",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
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
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react-select",
        "raw": "\"react-select\"",
        "start": 22,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
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
              "name": "CustomSelect1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 65
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 75
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 69,
                    "end": 75
                  }
                ],
                "start": 68,
                "end": 77
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 86
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Option",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 87,
                                  "end": 93
                                },
                                "typeArguments": null,
                                "start": 87,
                                "end": 93
                              }
                            ],
                            "start": 86,
                            "end": 94
                          },
                          "start": 81,
                          "end": 94
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 97,
                          "end": 99
                        }
                      ],
                      "start": 81,
                      "end": 99
                    },
                    "start": 79,
                    "end": 99
                  },
                  "start": 78,
                  "end": 99
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 104,
                "end": 106
              },
              "id": null,
              "generator": false,
              "start": 68,
              "end": 106
            },
            "definite": false,
            "start": 52,
            "end": 106
          }
        ],
        "declare": false,
        "start": 46,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CustomSelect2",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 136
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
                "name": "Option",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 143
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 137,
              "end": 143
            }
          ],
          "start": 136,
          "end": 145
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 154
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 161
                          },
                          "typeArguments": null,
                          "start": 155,
                          "end": 161
                        }
                      ],
                      "start": 154,
                      "end": 162
                    },
                    "start": 149,
                    "end": 162
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 165,
                    "end": 167
                  }
                ],
                "start": 149,
                "end": 167
              },
              "start": 147,
              "end": 167
            },
            "start": 146,
            "end": 167
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 169,
          "end": 171
        },
        "expression": false,
        "start": 114,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "value": "Props",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"react-select\"",
    "start": 22,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "CustomSelect1",
    "start": 52,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 114,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "CustomSelect2",
    "start": 123,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 170,
    "end": 171
  }
]
```
