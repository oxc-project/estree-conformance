__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "internalFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 43
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 47,
            "end": 53
          },
          "start": 45,
          "end": 53
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 67,
                "end": 74
              },
              "start": 60,
              "end": 75
            }
          ],
          "start": 54,
          "end": 77
        },
        "expression": false,
        "start": 24,
        "end": 77
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 17,
      "end": 77
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
            "name": "internalFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "debugFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 98
          },
          "optional": false,
          "computed": false,
          "start": 78,
          "end": 98
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 101,
          "end": 105
        },
        "start": 78,
        "end": 105
      },
      "directive": null,
      "start": 78,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 132
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 136,
            "end": 140
          },
          "start": 134,
          "end": 140
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 141,
          "end": 143
        },
        "expression": false,
        "start": 115,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 108,
      "end": 143
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
            "name": "publicFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 152
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "metadata",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 161
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 161
        },
        "right": {
          "type": "Literal",
          "value": "public",
          "raw": "\"public\"",
          "start": 164,
          "end": 172
        },
        "start": 144,
        "end": 172
      },
      "directive": null,
      "start": 144,
      "end": 173
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 17,
  "end": 173
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 17,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 24,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "internalFn",
    "start": 33,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 60,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
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
    "value": "internalFn",
    "start": 78,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "debugFlag",
    "start": 89,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "publicFn",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "publicFn",
    "start": 144,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 153,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"public\"",
    "start": 164,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  }
]
```
