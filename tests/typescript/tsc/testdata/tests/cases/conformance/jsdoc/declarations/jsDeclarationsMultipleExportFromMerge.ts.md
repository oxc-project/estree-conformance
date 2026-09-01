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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 37,
              "end": 38
            },
            "definite": false,
            "start": 33,
            "end": 38
          }
        ],
        "declare": false,
        "start": 27,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
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
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "init": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 57,
              "end": 58
            },
            "definite": false,
            "start": 53,
            "end": 58
          }
        ],
        "declare": false,
        "start": 47,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
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
    "value": "a",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
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
    "value": "2",
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
    "type": "Identifier",
    "value": "c",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "exportKind": "value",
          "start": 12,
          "end": 13
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "exportKind": "value",
          "start": 15,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./items",
        "raw": "\"./items\"",
        "start": 24,
        "end": 33
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
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
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 15,
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
    "value": "\"./items\"",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./items",
        "raw": "\"./items\"",
        "start": 18,
        "end": 27
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "exportKind": "value",
          "start": 38,
          "end": 39
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "exportKind": "value",
          "start": 41,
          "end": 42
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./items",
        "raw": "\"./items\"",
        "start": 50,
        "end": 59
      },
      "exportKind": "value",
      "attributes": [],
      "start": 29,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
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
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"./items\"",
    "start": 18,
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
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"./items\"",
    "start": 50,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "exportKind": "value",
          "start": 8,
          "end": 9
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "exportKind": "value",
          "start": 11,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./items",
        "raw": "\"./items\"",
        "start": 19,
        "end": 28
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 29
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 45
          },
          "exportKind": "value",
          "start": 38,
          "end": 45
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./two",
        "raw": "\"./two\"",
        "start": 52,
        "end": 59
      },
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 60
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 76
          },
          "exportKind": "value",
          "start": 69,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./two",
        "raw": "\"./two\"",
        "start": 83,
        "end": 90
      },
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 91
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "exportKind": "value",
          "start": 100,
          "end": 101
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./two",
        "raw": "\"./two\"",
        "start": 108,
        "end": 115
      },
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 115
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cc",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 131
          },
          "exportKind": "value",
          "start": 124,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./items",
        "raw": "\"./items\"",
        "start": 138,
        "end": 147
      },
      "exportKind": "value",
      "attributes": [],
      "start": 116,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 148
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
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 11,
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
    "value": "\"./items\"",
    "start": 19,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 40,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 47,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"./two\"",
    "start": 52,
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
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 71,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 78,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"./two\"",
    "start": 83,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 103,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"./two\"",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "cc",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 133,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"./items\"",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
