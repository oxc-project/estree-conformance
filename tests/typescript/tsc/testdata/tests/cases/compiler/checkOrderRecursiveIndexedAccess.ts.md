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
          "name": "Recur",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
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
                "start": 18,
                "end": 19
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 18,
              "end": 19
            }
          ],
          "start": 17,
          "end": 20
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSConditionalType",
              "checkType": {
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
              },
              "extendsType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 40,
                  "end": 47
                },
                "start": 40,
                "end": 49
              },
              "trueType": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 53,
                "end": 55
              },
              "falseType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
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
                      "start": 72,
                      "end": 73
                    },
                    "typeArguments": null,
                    "start": 72,
                    "end": 73
                  },
                  "start": 66,
                  "end": 73
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recur",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 82
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 83,
                            "end": 84
                          },
                          "typeArguments": null,
                          "start": 83,
                          "end": 84
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 86
                          },
                          "typeArguments": null,
                          "start": 85,
                          "end": 86
                        },
                        "start": 83,
                        "end": 87
                      }
                    ],
                    "start": 82,
                    "end": 88
                  },
                  "start": 77,
                  "end": 88
                },
                "optional": true,
                "readonly": null,
                "start": 58,
                "end": 89
              },
              "start": 28,
              "end": 89
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Recur",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 106
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
                                "start": 107,
                                "end": 108
                              },
                              "typeArguments": null,
                              "start": 107,
                              "end": 108
                            }
                          ],
                          "start": 106,
                          "end": 109
                        },
                        "start": 101,
                        "end": 109
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 101,
                      "end": 117
                    },
                    "start": 101,
                    "end": 119
                  },
                  "start": 98,
                  "end": 119
                }
              ],
              "start": 97,
              "end": 120
            }
          ],
          "start": 27,
          "end": 120
        },
        "declare": false,
        "start": 7,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
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
    "value": "Recur",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
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
    "value": "(",
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
    "type": "Keyword",
    "value": "extends",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 66,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 74,
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
    "value": "Recur",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
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
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
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
        "value": "./recur",
        "raw": "\"./recur\"",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "join",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 53
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
                "start": 54,
                "end": 55
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 54,
              "end": 55
            }
          ],
          "start": 53,
          "end": 56
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recur",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 65
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
                          "start": 66,
                          "end": 67
                        },
                        "typeArguments": null,
                        "start": 66,
                        "end": 67
                      }
                    ],
                    "start": 65,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "start": 60,
                "end": 70
              },
              "start": 58,
              "end": 70
            },
            "start": 57,
            "end": 70
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recur",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 78
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
                    "start": 79,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 79,
                  "end": 80
                }
              ],
              "start": 78,
              "end": 81
            },
            "start": 73,
            "end": 81
          },
          "start": 71,
          "end": 81
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "marker",
                    "raw": "'marker'",
                    "start": 96,
                    "end": 104
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 110
                    },
                    "start": 106,
                    "end": 110
                  }
                ],
                "start": 95,
                "end": 111
              },
              "start": 88,
              "end": 112
            }
          ],
          "start": 82,
          "end": 114
        },
        "expression": false,
        "start": 40,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
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
    "value": "Recur",
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
    "value": "\"./recur\"",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "String",
    "value": "'marker'",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
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
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
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
        "value": "./recur",
        "raw": "\"./recur\"",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "join",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "join",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "importKind": "value",
          "start": 42,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./join",
        "raw": "\"./join\"",
        "start": 54,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 33,
      "end": 63
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
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
              "start": 75,
              "end": 76
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 76
          }
        ],
        "start": 74,
        "end": 77
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 88
                    }
                  ],
                  "start": 86,
                  "end": 89
                },
                "start": 81,
                "end": 89
              },
              "start": 81,
              "end": 91
            },
            "start": 79,
            "end": 91
          },
          "start": 78,
          "end": 91
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 94,
          "end": 98
        },
        "start": 92,
        "end": 98
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Recur",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 114,
                            "end": 119
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
                                  "start": 120,
                                  "end": 121
                                },
                                "typeArguments": null,
                                "start": 120,
                                "end": 121
                              }
                            ],
                            "start": 119,
                            "end": 122
                          },
                          "start": 114,
                          "end": 122
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 125,
                          "end": 134
                        }
                      ],
                      "start": 114,
                      "end": 134
                    },
                    "start": 112,
                    "end": 134
                  },
                  "start": 111,
                  "end": 134
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 141
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    }
                  ],
                  "optional": false,
                  "start": 137,
                  "end": 144
                },
                "definite": false,
                "start": 111,
                "end": 144
              }
            ],
            "declare": false,
            "start": 105,
            "end": 145
          }
        ],
        "start": 99,
        "end": 147
      },
      "expression": false,
      "start": 64,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 147
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
    "value": "Recur",
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
    "value": "\"./recur\"",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"./join\"",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "l",
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
    "value": "Recur",
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
    "value": "T",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 125,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  }
]
```
