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
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
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
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 15,
        "end": 20
      },
      "exportKind": "value",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 34,
            "end": 40
          },
          "start": 28,
          "end": 40
        }
      ],
      "start": 0,
      "end": 42
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
            "start": 52,
            "end": 53
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "exportKind": "value",
          "start": 52,
          "end": 53
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "exportKind": "value",
          "start": 55,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 64,
        "end": 69
      },
      "exportKind": "value",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 81
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 83,
            "end": 89
          },
          "start": 77,
          "end": 89
        }
      ],
      "start": 43,
      "end": 91
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 106,
        "end": 111
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 123
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 125,
            "end": 131
          },
          "start": 119,
          "end": 131
        }
      ],
      "exportKind": "value",
      "start": 92,
      "end": 133
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 154,
        "end": 159
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 171
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 173,
            "end": 179
          },
          "start": 167,
          "end": 179
        }
      ],
      "exportKind": "value",
      "start": 134,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 182
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 10,
    "end": 14
  },
  {
    "type": "String",
    "value": "'./0'",
    "start": 15,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 59,
    "end": 63
  },
  {
    "type": "String",
    "value": "'./0'",
    "start": 64,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "*",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 101,
    "end": 105
  },
  {
    "type": "String",
    "value": "'./0'",
    "start": 106,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 143,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 146,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 149,
    "end": 153
  },
  {
    "type": "String",
    "value": "'./0'",
    "start": 154,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
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
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 21,
        "end": 26
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
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
            "start": 44,
            "end": 45
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "exportKind": "value",
          "start": 44,
          "end": 50
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "exportKind": "value",
          "start": 52,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 66,
        "end": 71
      },
      "exportKind": "value",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "value": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 82,
            "end": 85
          },
          "start": 79,
          "end": 85
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "value": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 90,
            "end": 93
          },
          "start": 87,
          "end": 93
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "value": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 98,
            "end": 101
          },
          "start": 95,
          "end": 101
        }
      ],
      "start": 35,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
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
    "value": "'./0'",
    "start": 21,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "d",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 61,
    "end": 65
  },
  {
    "type": "String",
    "value": "'./0'",
    "start": 66,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "String",
    "value": "\"a\"",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  }
]
```
