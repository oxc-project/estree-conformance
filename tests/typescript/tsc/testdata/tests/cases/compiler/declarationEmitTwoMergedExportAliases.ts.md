__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Route",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parts",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 37,
              "end": 38
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 21,
            "end": 39
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 59
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
                  "start": 61,
                  "end": 62
                },
                "typeArguments": null,
                "start": 61,
                "end": 62
              },
              "start": 59,
              "end": 62
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 44,
            "end": 63
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 79
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
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
                        "start": 88,
                        "end": 89
                      },
                      "typeArguments": null,
                      "start": 88,
                      "end": 89
                    },
                    "start": 86,
                    "end": 89
                  },
                  "start": 80,
                  "end": 89
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
                          "type": "ThisExpression",
                          "start": 93,
                          "end": 97
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "schema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 104
                        },
                        "optional": false,
                        "computed": false,
                        "start": 93,
                        "end": 104
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "schema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 113
                      },
                      "start": 93,
                      "end": 113
                    },
                    "directive": null,
                    "start": 93,
                    "end": 114
                  }
                ],
                "start": 91,
                "end": 116
              },
              "expression": false,
              "start": 79,
              "end": 116
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 68,
            "end": 116
          }
        ],
        "start": 15,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 118
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Route",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 133
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Route",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 133
          },
          "exportKind": "value",
          "start": 128,
          "end": 133
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 119,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 159
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Route",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 180
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 183,
                          "end": 188
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 190,
                          "end": 191
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 183,
                        "end": 191
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "enabled",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 200
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 202,
                          "end": 206
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 193,
                        "end": 206
                      }
                    ],
                    "start": 181,
                    "end": 208
                  }
                ],
                "start": 171,
                "end": 209
              },
              "start": 164,
              "end": 210
            }
          ],
          "start": 162,
          "end": 212
        },
        "expression": false,
        "start": 144,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 137,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 213
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 21,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "parts",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 68,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 119,
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
    "value": "Route",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 164,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "enabled",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
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
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Route",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Route",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "exportKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 22,
        "end": 27
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Route",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 59
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 84
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 94
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 96,
                          "end": 102
                        },
                        "start": 94,
                        "end": 102
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 89,
                      "end": 102
                    }
                  ],
                  "start": 87,
                  "end": 104
                },
                "declare": false,
                "start": 73,
                "end": 105
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 66,
              "end": 105
            }
          ],
          "start": 60,
          "end": 107
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 36,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 29,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
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
    "type": "Identifier",
    "value": "Route",
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
    "value": "\"./a\"",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 44,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 73,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
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
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Route",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Factory",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 25
          },
          "exportKind": "value",
          "start": 9,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 33,
        "end": 38
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Factory",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 72
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 98
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
                        "name": "enabled",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 110
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 112,
                          "end": 119
                        },
                        "start": 110,
                        "end": 119
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 103,
                      "end": 119
                    }
                  ],
                  "start": 101,
                  "end": 121
                },
                "declare": false,
                "start": 86,
                "end": 122
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 79,
              "end": 122
            }
          ],
          "start": 73,
          "end": 124
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 47,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 40,
      "end": 124
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
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
    "type": "Identifier",
    "value": "Route",
    "start": 9,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 15,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 28,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"./b\"",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 40,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 47,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "enabled",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
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
            "name": "Factory",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Factory",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "importKind": "value",
          "start": 9,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./c",
        "raw": "\"./c\"",
        "start": 24,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 46
          },
          "importKind": "value",
          "start": 40,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 54,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 31,
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
              "name": "route",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 79
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Factory",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 93
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Factory",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 94,
                            "end": 101
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Schema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 102,
                            "end": 108
                          },
                          "start": 94,
                          "end": 108
                        },
                        "typeArguments": null,
                        "start": 94,
                        "end": 108
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Factory",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 118
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 119,
                            "end": 126
                          },
                          "start": 111,
                          "end": 126
                        },
                        "typeArguments": null,
                        "start": 111,
                        "end": 126
                      }
                    ],
                    "start": 94,
                    "end": 126
                  }
                ],
                "start": 93,
                "end": 127
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 135
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 137,
                        "end": 138
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 130,
                      "end": 138
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "enabled",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 147
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 149,
                        "end": 153
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 140,
                      "end": 153
                    }
                  ],
                  "start": 128,
                  "end": 155
                }
              ],
              "start": 82,
              "end": 156
            },
            "definite": false,
            "start": 74,
            "end": 156
          }
        ],
        "declare": false,
        "start": 68,
        "end": 157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 157
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
              "name": "created",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 178
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 187
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 181,
              "end": 189
            },
            "definite": false,
            "start": 171,
            "end": 189
          }
        ],
        "declare": false,
        "start": 165,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 190
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 215
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "Factory",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 225
            },
            "definite": false,
            "start": 204,
            "end": 225
          }
        ],
        "declare": false,
        "start": 198,
        "end": 226
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 226
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Config",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 245
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Factory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 255
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 262
                },
                "start": 248,
                "end": 262
              },
              "typeArguments": null,
              "start": 248,
              "end": 262
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Factory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 272
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
                },
                "start": 265,
                "end": 280
              },
              "typeArguments": null,
              "start": 265,
              "end": 280
            }
          ],
          "start": 248,
          "end": 280
        },
        "declare": false,
        "start": 234,
        "end": 281
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 227,
      "end": 281
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 281
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
    "value": "Factory",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"./c\"",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 40,
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
    "value": "\"./a\"",
    "start": 54,
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
    "value": "route",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 86,
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
    "value": "Factory",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "enabled",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 158,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "created",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 204,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  }
]
```
