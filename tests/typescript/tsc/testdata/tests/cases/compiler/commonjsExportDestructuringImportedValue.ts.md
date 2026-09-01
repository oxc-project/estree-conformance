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
          "name": "CodePriceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 26
        },
        "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 44,
                "end": 47
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 33,
              "end": 48
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 64,
                "end": 67
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 53,
              "end": 68
            }
          ],
          "start": 27,
          "end": 70
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 70
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "CodePriceType",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 99
      },
      "exportKind": "value",
      "start": 71,
      "end": 100
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
              "name": "pair",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 122,
                  "end": 125
                },
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 127,
                  "end": 130
                }
              ],
              "start": 121,
              "end": 131
            },
            "definite": false,
            "start": 114,
            "end": 131
          }
        ],
        "declare": false,
        "start": 108,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 101,
      "end": 132
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
              "name": "fallback",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 154
            },
            "init": {
              "type": "Literal",
              "value": "fallback",
              "raw": "\"fallback\"",
              "start": 157,
              "end": 167
            },
            "definite": false,
            "start": 146,
            "end": 167
          }
        ],
        "declare": false,
        "start": 140,
        "end": 168
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 133,
      "end": 168
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 169
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "CodePriceType",
    "start": 13,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 53,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 78,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "CodePriceType",
    "start": 86,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 101,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 133,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "fallback",
    "start": 146,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"fallback\"",
    "start": 157,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
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
            "name": "CodePriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "CodePriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "importKind": "value",
          "start": 9,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./enum",
        "raw": "\"./enum\"",
        "start": 30,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 55,
                  "end": 56
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 59
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 59
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 58,
                  "end": 59
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 61
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "CodePriceType",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 77
            },
            "definite": false,
            "start": 53,
            "end": 77
          }
        ],
        "declare": false,
        "start": 47,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
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
    "value": "CodePriceType",
    "start": 9,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 25,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"./enum\"",
    "start": 30,
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
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "CodePriceType",
    "start": 64,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
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
            "name": "pair",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pair",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./enum",
        "raw": "\"./enum\"",
        "start": 21,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 51
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 59
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 60
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "pair",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 67
            },
            "definite": false,
            "start": 44,
            "end": 67
          }
        ],
        "declare": false,
        "start": 38,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
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
    "value": "pair",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./enum\"",
    "start": 21,
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
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "ArrayA",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ArrayB",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
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
            "name": "CodePriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "PriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 35
          },
          "importKind": "value",
          "start": 9,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./enum",
        "raw": "\"./enum\"",
        "start": 43,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 52
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 69
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AliasA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 77
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 68,
                  "end": 77
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AliasB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 88
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 79,
                  "end": 88
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 90
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "PriceType",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 102
            },
            "definite": false,
            "start": 66,
            "end": 102
          }
        ],
        "declare": false,
        "start": 60,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
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
    "value": "CodePriceType",
    "start": 9,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 23,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "PriceType",
    "start": 26,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 38,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"./enum\"",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
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
    "value": "A",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "AliasA",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "AliasB",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "PriceType",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "CodePriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 20
          },
          "start": 7,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./enum",
        "raw": "\"./enum\"",
        "start": 26,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DefaultA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 62
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 51,
                  "end": 62
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DefaultB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 75
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 64,
                  "end": 75
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 77
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "CodePriceType",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 93
            },
            "definite": false,
            "start": 49,
            "end": 93
          }
        ],
        "declare": false,
        "start": 43,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
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
    "type": "Identifier",
    "value": "CodePriceType",
    "start": 7,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"./enum\"",
    "start": 26,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
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
    "value": "A",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "DefaultA",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "DefaultB",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "CodePriceType",
    "start": 80,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
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
            "name": "CodePriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "CodePriceType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "importKind": "value",
          "start": 9,
          "end": 22
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "fallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 32
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 32
          },
          "importKind": "value",
          "start": 24,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./enum",
        "raw": "\"./enum\"",
        "start": 40,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 49
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Missing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 72
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Missing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 72
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 83
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 83
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 65,
                  "end": 83
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 85
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "CodePriceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 101
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 105,
                "end": 108
              },
              "start": 88,
              "end": 108
            },
            "definite": false,
            "start": 63,
            "end": 108
          }
        ],
        "declare": false,
        "start": 57,
        "end": 109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
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
    "value": "CodePriceType",
    "start": 9,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "fallback",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"./enum\"",
    "start": 40,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Missing",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "fallback",
    "start": 75,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "CodePriceType",
    "start": 88,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 102,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  }
]
```
