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
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 15
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 17
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 16,
              "end": 17
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 19,
              "end": 20
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 22,
              "end": 23
            }
          ],
          "start": 15,
          "end": 24
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 35
                  },
                  "typeArguments": null,
                  "start": 34,
                  "end": 35
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "typeArguments": null,
                  "start": 37,
                  "end": 38
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 40,
                  "end": 41
                }
              ],
              "start": 33,
              "end": 42
            },
            "start": 30,
            "end": 42
          },
          "start": 27,
          "end": 42
        },
        "declare": false,
        "start": 7,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 43
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 59
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 60,
              "end": 61
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 63,
              "end": 64
            }
          ],
          "start": 59,
          "end": 65
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 71
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "typeArguments": null,
                "start": 72,
                "end": 73
              },
              {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "typeArguments": null,
                "start": 83,
                "end": 84
              }
            ],
            "start": 71,
            "end": 85
          },
          "start": 68,
          "end": 85
        },
        "declare": false,
        "start": 51,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 44,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baa",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 102
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 103,
              "end": 104
            }
          ],
          "start": 102,
          "end": 105
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 111
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 122
                },
                "typeArguments": null,
                "start": 121,
                "end": 122
              }
            ],
            "start": 111,
            "end": 123
          },
          "start": 108,
          "end": 123
        },
        "declare": false,
        "start": 94,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 87,
      "end": 124
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Baa",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 149
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 150,
                            "end": 156
                          }
                        ],
                        "start": 149,
                        "end": 157
                      },
                      "start": 146,
                      "end": 157
                    },
                    "start": 144,
                    "end": 157
                  },
                  "start": 143,
                  "end": 157
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 162,
                "end": 163
              },
              "id": null,
              "generator": false,
              "start": 142,
              "end": 163
            },
            "definite": false,
            "start": 138,
            "end": 163
          }
        ],
        "declare": false,
        "start": 132,
        "end": 163
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 125,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 163
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
    "value": "Bar",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 60,
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
    "value": "N",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 94,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Baa",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Baa",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 162,
    "end": 163
  }
]
```
