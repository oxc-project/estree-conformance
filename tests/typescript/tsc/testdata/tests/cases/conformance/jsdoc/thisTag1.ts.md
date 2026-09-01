__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 116
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 131,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 137
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 148
                },
                "optional": false,
                "computed": false,
                "start": 140,
                "end": 148
              },
              "start": 131,
              "end": 148
            },
            "start": 124,
            "end": 148
          }
        ],
        "start": 118,
        "end": 150
      },
      "expression": false,
      "start": 104,
      "end": 150
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 159
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 169
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 178,
                  "end": 179
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 175,
                "end": 179
              }
            ],
            "start": 162,
            "end": 181
          },
          "definite": false,
          "start": 158,
          "end": 181
        }
      ],
      "declare": false,
      "start": 152,
      "end": 181
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "optional": false,
          "computed": false,
          "start": 182,
          "end": 185
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 186,
            "end": 190
          }
        ],
        "optional": false,
        "start": 182,
        "end": 191
      },
      "directive": null,
      "start": 182,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 191
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 124,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  }
]
```
