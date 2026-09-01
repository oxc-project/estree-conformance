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
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 18
            },
            "init": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 22,
                    "end": 26
                  },
                  "start": 22,
                  "end": 27
                },
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 35
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      },
                      "start": 45,
                      "end": 53
                    },
                    "start": 39,
                    "end": 53
                  },
                  "nameType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 64
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 65,
                            "end": 66
                          },
                          "typeArguments": null,
                          "start": 65,
                          "end": 66
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "length",
                            "raw": "\"length\"",
                            "start": 68,
                            "end": 76
                          },
                          "start": 68,
                          "end": 76
                        }
                      ],
                      "start": 64,
                      "end": 77
                    },
                    "start": 57,
                    "end": 77
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 81,
                        "end": 87
                      },
                      "start": 81,
                      "end": 89
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 92
                      },
                      "typeArguments": null,
                      "start": 91,
                      "end": 92
                    },
                    "start": 80,
                    "end": 93
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 31,
                  "end": 95
                },
                "start": 22,
                "end": 95
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 107,
                "end": 110
              },
              "start": 21,
              "end": 110
            },
            "definite": false,
            "start": 13,
            "end": 110
          }
        ],
        "declare": false,
        "start": 7,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 111
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
    "value": "thing",
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
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Null",
    "value": "null",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
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
    "value": "K",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 36,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 57,
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
    "value": "K",
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
    "type": "String",
    "value": "\"length\"",
    "start": 68,
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
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  }
]
```
