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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "\"./foo\"",
        "start": 16,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "definite": false,
            "start": 36,
            "end": 45
          }
        ],
        "declare": false,
        "start": 32,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": "z",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./foo\"",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
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
            "name": "pi",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pi",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "importKind": "value",
          "start": 8,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../baz",
        "raw": "\"../baz\"",
        "start": 17,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 46
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sqrt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 51
                },
                "optional": false,
                "computed": false,
                "start": 42,
                "end": 51
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 53,
                    "end": 54
                  },
                  "prefix": true,
                  "start": 52,
                  "end": 54
                }
              ],
              "optional": false,
              "start": 42,
              "end": 55
            },
            "definite": false,
            "start": 38,
            "end": 55
          }
        ],
        "declare": false,
        "start": 34,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "pi",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 74
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "pi",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 79
              },
              "start": 72,
              "end": 79
            },
            "definite": false,
            "start": 68,
            "end": 79
          }
        ],
        "declare": false,
        "start": 64,
        "end": 80
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 81
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
    "value": "pi",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 12,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"../baz\"",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 52,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "pi",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "pi",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a/bar",
        "raw": "\"a/bar\"",
        "start": 16,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "importKind": "value",
          "start": 33,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a/foo",
        "raw": "\"a/foo\"",
        "start": 41,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 25,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pi",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 63
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 70
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "PI",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              },
              "optional": false,
              "computed": false,
              "start": 66,
              "end": 73
            },
            "definite": false,
            "start": 61,
            "end": 73
          }
        ],
        "declare": false,
        "start": 57,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 74
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "start": 90,
              "end": 95
            },
            "definite": false,
            "start": 86,
            "end": 95
          }
        ],
        "declare": false,
        "start": 82,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 75,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
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
    "value": "x",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"a/bar\"",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"a/foo\"",
    "start": 41,
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
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "pi",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  }
]
```
