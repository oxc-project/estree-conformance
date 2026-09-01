__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "Literal",
              "value": "\"",
              "raw": "\"\\\"\"",
              "start": 28,
              "end": 32
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 35,
                "end": 37
              },
              "expression": false,
              "start": 32,
              "end": 37
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 37
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 68,
              "end": 69
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 42,
            "end": 70
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 101,
              "end": 102
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 75,
            "end": 103
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_b",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 136,
              "end": 137
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 108,
            "end": 138
          }
        ],
        "start": 8,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 140
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [],
            "start": 152,
            "end": 159
          },
          "definite": false,
          "start": 148,
          "end": 159
        }
      ],
      "declare": false,
      "start": 142,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "property": {
          "type": "Literal",
          "value": "\"",
          "raw": "\"\\\"\"",
          "start": 164,
          "end": 168
        },
        "optional": false,
        "computed": true,
        "start": 162,
        "end": 169
      },
      "directive": null,
      "start": 162,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 180
        },
        "property": {
          "type": "Literal",
          "value": "y",
          "raw": "'y'",
          "start": 181,
          "end": 184
        },
        "optional": false,
        "computed": true,
        "start": 179,
        "end": 185
      },
      "directive": null,
      "start": 179,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 199
        },
        "optional": false,
        "computed": false,
        "start": 196,
        "end": 199
      },
      "directive": null,
      "start": 196,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "_b",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 217
        },
        "optional": false,
        "computed": false,
        "start": 213,
        "end": 217
      },
      "directive": null,
      "start": 213,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 231
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 233
        },
        "optional": false,
        "computed": false,
        "start": 230,
        "end": 233
      },
      "directive": null,
      "start": 230,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 14,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 21,
    "end": 27
  },
  {
    "type": "String",
    "value": "\"\\\"\"",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "String",
    "value": "\"\\\"\"",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 180,
    "end": 181
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 232,
    "end": 233
  }
]
```
