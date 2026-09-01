__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "start": 33,
          "end": 39
        }
      ],
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 45,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 26,
      "end": 51
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 66,
        "end": 71
      },
      "attributes": [],
      "exportKind": "value",
      "start": 52,
      "end": 72
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 87,
        "end": 92
      },
      "attributes": [],
      "exportKind": "value",
      "start": 73,
      "end": 92
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "exportKind": "value",
          "start": 101,
          "end": 102
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 103
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "exportKind": "value",
          "start": 112,
          "end": 113
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 114
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 125
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 125
          },
          "importKind": "value",
          "start": 123,
          "end": 125
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 129
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 129
          },
          "importKind": "value",
          "start": 127,
          "end": 129
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 133
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 139
          },
          "importKind": "value",
          "start": 131,
          "end": 139
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 146,
        "end": 151
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 115,
      "end": 152
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 163
          },
          "exportKind": "value",
          "start": 161,
          "end": 163
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "exportKind": "value",
          "start": 165,
          "end": 167
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 171
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 177
          },
          "exportKind": "value",
          "start": 169,
          "end": 177
        }
      ],
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 184,
        "end": 189
      },
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 193
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 204
          }
        ],
        "start": 192,
        "end": 204
      },
      "directive": null,
      "start": 192,
      "end": 205
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 205
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "\"foo\"",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 35,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 40,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "*",
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
    "value": "\"foo\"",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 82,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 87,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 141,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 172,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 179,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  }
]
```
