__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 80
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OnPush",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 93
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 95,
                  "end": 96
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 87,
                "end": 96
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 109,
                  "end": 110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 110
              }
            ],
            "start": 83,
            "end": 113
          },
          "definite": false,
          "start": 57,
          "end": 113
        }
      ],
      "declare": false,
      "start": 51,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 138
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 162
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "OnPush",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 169
            },
            "optional": false,
            "computed": false,
            "start": 139,
            "end": 169
          },
          "optional": false,
          "computed": true,
          "start": 115,
          "end": 170
        },
        "right": {
          "type": "Literal",
          "value": "OnPush",
          "raw": "'OnPush'",
          "start": 173,
          "end": 181
        },
        "start": 115,
        "end": 181
      },
      "directive": null,
      "start": 115,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 206
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 230
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Default",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 238
            },
            "optional": false,
            "computed": false,
            "start": 207,
            "end": 238
          },
          "optional": false,
          "computed": true,
          "start": 183,
          "end": 239
        },
        "right": {
          "type": "Literal",
          "value": "Default",
          "raw": "'Default'",
          "start": 242,
          "end": 251
        },
        "start": 183,
        "end": 251
      },
      "directive": null,
      "start": 183,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 259
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 274
          },
          "optional": false,
          "computed": false,
          "start": 253,
          "end": 274
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 298
          },
          {
            "type": "Literal",
            "value": "aField",
            "raw": "\"aField\"",
            "start": 300,
            "end": 308
          },
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
                  "start": 311,
                  "end": 316
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 318,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 320
              }
            ],
            "start": 310,
            "end": 321
          }
        ],
        "optional": false,
        "start": 253,
        "end": 322
      },
      "directive": null,
      "start": 253,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ChangeDetectionStrategy",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 369
        },
        "property": {
          "type": "Literal",
          "value": "bField",
          "raw": "\"bField\"",
          "start": 370,
          "end": 378
        },
        "optional": false,
        "computed": true,
        "start": 346,
        "end": 379
      },
      "directive": null,
      "start": 346,
      "end": 380
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 381
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
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 57,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "OnPush",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 115,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 139,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "OnPush",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "'OnPush'",
    "start": 173,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 183,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 207,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 231,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "'Default'",
    "start": 242,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 260,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 275,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"aField\"",
    "start": 300,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 311,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "ChangeDetectionStrategy",
    "start": 346,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "\"bField\"",
    "start": 370,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  }
]
```
