__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Yoha",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 73
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 74,
          "end": 76
        },
        "abstract": false,
        "declare": false,
        "start": 63,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 77
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Yoha",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
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
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "importKind": "value",
          "start": 8,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./yoha",
        "raw": "'./yoha'",
        "start": 19,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 42
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 50
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              },
              "start": 52,
              "end": 57
            },
            "start": 50,
            "end": 57
          },
          "value": null,
          "start": 43,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 61
      },
      "expression": false,
      "start": 30,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yoha",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 81
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 86
                      },
                      "start": 82,
                      "end": 86
                    }
                  ],
                  "name": "yoha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 91
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yoha",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 102
                      },
                      "typeArguments": null,
                      "start": 98,
                      "end": 102
                    },
                    "start": 96,
                    "end": 102
                  },
                  "start": 93,
                  "end": 102
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 104,
                "end": 106
              },
              "expression": false,
              "start": 81,
              "end": 106
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 77,
            "end": 106
          }
        ],
        "start": 73,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 63,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
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
    "value": "Yoha",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "'./yoha'",
    "start": 19,
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
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "yoha",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "yoha",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Yoha",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
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
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
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
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yoha",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "importKind": "value",
          "start": 8,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./yoha",
        "raw": "'./yoha'",
        "start": 19,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 42
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 50
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              },
              "start": 52,
              "end": 57
            },
            "start": 50,
            "end": 57
          },
          "value": null,
          "start": 43,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 61
      },
      "expression": false,
      "start": 30,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yoha",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 81
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 86
                      },
                      "start": 82,
                      "end": 86
                    }
                  ],
                  "name": "yoha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 91
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 99
                  },
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
                          "name": "Yoha",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 105
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 105
                      },
                      "start": 101,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "value": null,
                  "start": 93,
                  "end": 107
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 109,
                "end": 111
              },
              "expression": false,
              "start": 81,
              "end": 111
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 77,
            "end": 111
          }
        ],
        "start": 73,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 63,
      "end": 144
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 144
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
    "value": "Yoha",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "'./yoha'",
    "start": 19,
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
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "yoha",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "yoha",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Yoha",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  }
]
```
