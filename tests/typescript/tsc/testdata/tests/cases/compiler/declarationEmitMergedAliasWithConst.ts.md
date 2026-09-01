__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 18
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Red",
                      "raw": "\"Red\"",
                      "start": 32,
                      "end": 37
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 27,
                    "end": 37
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Green",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 48
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Green",
                      "raw": "\"Green\"",
                      "start": 50,
                      "end": 57
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 43,
                    "end": 57
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 67
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Blue",
                      "raw": "\"Blue\"",
                      "start": 69,
                      "end": 75
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 63,
                    "end": 75
                  }
                ],
                "start": 21,
                "end": 77
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 86
                },
                "typeArguments": null,
                "start": 81,
                "end": 86
              },
              "start": 21,
              "end": 86
            },
            "definite": false,
            "start": 13,
            "end": 86
          }
        ],
        "declare": false,
        "start": 7,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Color",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 105
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Color",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 120
          },
          "typeArguments": null,
          "start": 108,
          "end": 120
        },
        "declare": false,
        "start": 95,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 88,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Colors",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 139
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
            },
            "typeArguments": null,
            "start": 142,
            "end": 147
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 159
              },
              "typeArguments": null,
              "start": 154,
              "end": 159
            },
            "start": 148,
            "end": 159
          },
          "start": 142,
          "end": 160
        },
        "declare": false,
        "start": 128,
        "end": 160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 121,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"Red\"",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Green",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"Green\"",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"Blue\"",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 81,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 95,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 115,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "Colors",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  }
]
```
